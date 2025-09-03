// Importing the recipes database
import { recipes } from "./recipes.js";
import { ingredients } from "./ingredients.js";

// Favorites functionality
let favRecipes = JSON.parse(localStorage.getItem("favRecipes")) || [];
localStorage.setItem("favRecipes", JSON.stringify(favRecipes));

let showFavoritesOnly = false;
const advFav = document.getElementById("advFav");
const searchInput = document.querySelector('#search input');
const recipesContainer = document.getElementById('recipesContainer');

// Toggle favorites filter
advFav.addEventListener("click", () => {
    showFavoritesOnly = !showFavoritesOnly;
    advFav.classList.toggle("selected", showFavoritesOnly);
    displayRecipes();
});

// Normalize Greek text (remove diacritics and convert to lowercase)
function normalizeText(text) {
    return text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() : '';
}

// Filter and display recipes
function displayRecipes() {
    const searchTerm = normalizeText(searchInput.value);
    
    // Get selected tags + ingredients
    const selectedTags = Array.from(document.querySelectorAll('#cats li.selected')).map(li => li.textContent);
    const selectedIngredients = Array.from(document.querySelectorAll('#ings li.selected')).map(li => {
        const ing = ingredients.find(i => i.name === li.textContent);
        return ing ? ing.id : null;
    }).filter(id => id !== null);
    
    const filteredRecipes = recipes.filter(recipe => {
        if (recipe.id === "error") return false;
        
        // Favorites filter
        if (showFavoritesOnly && !favRecipes.includes(recipe.id)) return false;
        
        // Tags filter
        if (selectedTags.length > 0) {
            const hasSelectedTag = selectedTags.some(tag => recipe.tags && recipe.tags.includes(tag));
            if (!hasSelectedTag) return false;
        }
        
        // Ingredients filter
        if (selectedIngredients.length > 0) {
            const recipeIngredientIds = recipe.ingredients.map(ing => ing.id);
            const hasSelectedIngredient = selectedIngredients.some(id => recipeIngredientIds.includes(id));
            if (!hasSelectedIngredient) return false;
        }
        
        // Search filter
        if (searchTerm && 
            !normalizeText(recipe.title).includes(searchTerm) && 
            !normalizeText(recipe.description).includes(searchTerm)) {
            return false;
        }
        
        return true;
    });
    
    // Display results
    recipesContainer.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        const noResults = document.createElement('div');
        noResults.classList.add('no-results', 'text');
        noResults.textContent = showFavoritesOnly ? 
            'Δεν έχετε αγαπημένες συνταγές.' : 
            'Δεν βρέθηκαν συνταγές.';
        recipesContainer.appendChild(noResults);
        return;
    }
    
    filteredRecipes.forEach(recipe => {
        const a = document.createElement("a");
        a.href = "./recipe.html?id=" + recipe.id;
        a.classList.add("card");
        
        const divT = document.createElement("div");
        divT.classList.add("title", "text", "ubuntu-medium");
        divT.textContent = recipe.title;
        a.appendChild(divT);

        const img = document.createElement("img");
        img.classList.add("tn");
        img.src = recipe.picture || "https://img.freepik.com/premium-vector/chef-hat-logo-illustration_746614-100.jpg";
        a.appendChild(img);

        const divB = document.createElement("div");
        divB.classList.add("bottom");
        a.appendChild(divB);

        const divTi = document.createElement("div");
        divTi.classList.add("time", "text", "ubuntu-light");
        divTi.textContent = recipe.time;
        divB.appendChild(divTi);

        const divP = document.createElement("div");
        divP.classList.add("portion", "text", "ubuntu-light");
        divP.textContent = recipe.servings + " srv";
        divB.appendChild(divP);

        const p = document.createElement("p");
        p.classList.add("desc", "text", "eb-garamond");
        p.textContent = recipe.description;
        a.appendChild(p);

        recipesContainer.appendChild(a);
    });
}

// Initialize filters
function initFilters() {
    const validRecipes = recipes.filter(r => r.id !== "error");
    
    // 🔹 Tags (filter out empty/null)
    const tags = [...new Set(validRecipes.flatMap(r => r.tags || []))].filter(t => t && t.trim() !== "");
    const tagsUl = document.getElementById("cats");
    
    tags.forEach(tag => {
        const li = document.createElement("li");
        li.classList.add("button");
        li.textContent = tag;
        li.addEventListener('click', () => {
            li.classList.toggle("selected");
            displayRecipes();
        });
        tagsUl.appendChild(li);
    });
    
    // 🔹 Ingredients
    const allIngredients = validRecipes.flatMap(r => r.ingredients.map(i => i.id));
    const uniqueIngredients = [...new Set(allIngredients)];
    const ingsUl = document.getElementById("ings");
    
    uniqueIngredients.forEach(ingId => {
        const ing = ingredients.find(i => i.id === ingId);
        const li = document.createElement("li");
        li.classList.add("button");
        li.textContent = ing ? ing.name : ingId;
        li.addEventListener('click', () => {
            li.classList.toggle("selected");
            displayRecipes();
        });
        ingsUl.appendChild(li);
    });
}


// Set up event listeners
searchInput.addEventListener('input', displayRecipes);
window.addEventListener('DOMContentLoaded', () => {
    initFilters();
    displayRecipes();
});



/*  Dynamically populating the recipes page initially */

recipes.forEach(recipe => {
    if (recipe.id === "error") return;

    const a = document.createElement("a");
    a.href = "./recipe.html?id=" + recipe.id;
    a.classList.add("card");
    
    const divT = document.createElement("div");
    divT.classList.add("title", "text", "ubuntu-medium");
    divT.textContent = recipe.title;
    a.appendChild(divT);

    const img = document.createElement("img");
    img.classList.add("tn");
    img.src = recipe.picture || "https://img.freepik.com/premium-vector/chef-hat-logo-illustration_746614-100.jpg";
    a.appendChild(img);

    const divB = document.createElement("div");
    divB.classList.add("bottom");
    a.appendChild(divB);

    const divTi = document.createElement("div");
    divTi.classList.add("time", "text", "ubuntu-light");
    divTi.textContent = recipe.time;
    divB.appendChild(divTi);

    const divP = document.createElement("div");
    divP.classList.add("portion", "text", "ubuntu-light");
    divP.textContent = recipe.servings + " srv";
    divB.appendChild(divP);

    const p = document.createElement("p");
    p.classList.add("desc", "text", "eb-garamond");
    p.textContent = recipe.description;
    a.appendChild(p);

    const rCont = document.getElementById("recipesContainer");
    rCont.append(a);
})