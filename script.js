/* =========================================
   DEBUGGING TOOL: VALIDATOR
   Checks for missing IDs AND Unused Ingredients
   ========================================= */

/*

import { ingredients, originalRecipes, externalRecipes } from "./database.js";

// 1. Create a Set of all valid IDs from the ingredients database
const validIngredientIds = new Set(ingredients.map(ing => ing.id));

// 2. Track which IDs are actually used
const usedIngredientIds = new Set();

// 3. Logs
const missingLog = [];
const unusedLog = [];

// --- CHECK ORIGINAL RECIPES (Ingredients are objects {id: "..."}) ---
originalRecipes.forEach(recipe => {
    if (recipe.ingredients) {
        recipe.ingredients.forEach(ing => {
            if (!validIngredientIds.has(ing.id)) {
                missingLog.push({
                    'Type': 'Original',
                    'Recipe': recipe.title,
                    'Missing ID': ing.id,
                    'Context': ing.label || 'N/A'
                });
            } else {
                usedIngredientIds.add(ing.id);
            }
        });
    }
});

// --- CHECK EXTERNAL RECIPES (Ingredients are strings ["..."]) ---
externalRecipes.forEach(recipe => {
    if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
        recipe.ingredients.forEach(ingId => {
            if (!validIngredientIds.has(ingId)) {
                missingLog.push({
                    'Type': 'External',
                    'Recipe': recipe.title,
                    'Missing ID': ingId,
                    'Context': 'Ingredient List'
                });
            } else {
                usedIngredientIds.add(ingId);
            }
        });
    }
});

// --- CHECK FOR UNUSED INGREDIENTS ---
ingredients.forEach(ing => {
    // Ignore the 'error' placeholder
    if (ing.id !== 'error' && !usedIngredientIds.has(ing.id)) {
        unusedLog.push({
            'Unused ID': ing.id,
            'Name': ing.name
        });
    }
});

// --- REPORTING ---
console.groupCollapsed("%c🔎 DATABASE INTEGRITY CHECK", "color: #C97A40; font-size: 12px; font-weight: bold;");

// Report Missing
if (missingLog.length > 0) {
    console.log(`%c⚠️ Found ${missingLog.length} Missing IDs:`, "color: red; font-weight: bold;");
    console.table(missingLog);
} else {
    console.log("%c✅ All recipe ingredients exist in database.", "color: green;");
}

// Report Unused
if (unusedLog.length > 0) {
    console.log(`%c⚠️ Found ${unusedLog.length} Unused Ingredients (Safe to delete):`, "color: orange; font-weight: bold;");
    console.table(unusedLog);
} else {
    console.log("%c✅ Database is clean (No unused ingredients).", "color: green;");
}

console.groupEnd();

*/



// /*







import { originalRecipes, externalRecipes, ingredients as ingDB } from "./database.js";

// --- Theme Logic ---
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// --- Data Preparation ---
const logoURL = 'https://res.cloudinary.com/dhon1edrf/image/upload/v1767978226/chefLogo_aek6mg.png';

const container = document.getElementById('recipesContainer');
const searchInput = document.querySelector('#search input');
const advToggle = document.getElementById('advToggle');
const filterMenu = document.getElementById('filterMenu');

// Combine lists
const allRecipes = [
    ...originalRecipes.map(r => ({ ...r, isInternal: true })),
    ...externalRecipes.map(r => ({ ...r, isInternal: false })) // FIX: Removed "ingredients: []" so we don't erase them
];

// --- Filter Menu Population ---

// 1. Populate Tags (from all recipes)
const tagsListEl = document.getElementById('tagsList');
const uniqueTags = [...new Set(allRecipes.flatMap(r => r.tags || []))].sort();

uniqueTags.forEach(tag => {
    const label = document.createElement('label');
    label.className = 'filter-item';
    label.innerHTML = `<input type="checkbox" value="${tag}"> ${tag}`;
    label.querySelector('input').addEventListener('change', () => displayRecipes(searchInput.value));
    tagsListEl.appendChild(label);
});

// 2. Populate Ingredients (from DB)
const ingListEl = document.getElementById('ingFilterList');
// Sort ingredients alphabetically
const sortedIngs = [...ingDB].sort((a, b) => a.name.localeCompare(b.name));

sortedIngs.forEach(ing => {
    if (ing.id === 'error') return; // Skip error placeholder
    const label = document.createElement('label');
    label.className = 'filter-item';
    label.innerHTML = `<input type="checkbox" value="${ing.id}"> ${ing.name}`;
    label.querySelector('input').addEventListener('change', () => displayRecipes(searchInput.value));
    ingListEl.appendChild(label);
});

// 3. Favorites Toggle Listener
document.getElementById('favFilter').addEventListener('change', () => displayRecipes(searchInput.value));

// --- Toggle Menu Logic ---
advToggle.addEventListener('click', () => {
    filterMenu.classList.toggle('hidden');
    const icon = advToggle.querySelector('i');
    if (filterMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
});

// --- Main Display Logic ---
function displayRecipes(filterText = "") {
    container.innerHTML = "";

    // Get Search Term
    const term = filterText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    // Get Selected Filters
    const selectedTags = Array.from(tagsListEl.querySelectorAll('input:checked')).map(cb => cb.value);
    const selectedIngs = Array.from(ingListEl.querySelectorAll('input:checked')).map(cb => cb.value);
    const showFavsOnly = document.getElementById('favFilter').checked;
    const favs = JSON.parse(localStorage.getItem('favRecipes')) || [];

    const filtered = allRecipes.filter(r => {
        // 1. Text Search
        const titleNorm = r.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        if (!titleNorm.includes(term)) return false;

        // 2. Favorites Filter
        if (showFavsOnly && !favs.includes(r.id)) return false;

        // 3. Tags Filter (AND logic: must have ALL selected tags)
        if (selectedTags.length > 0) {
            if (!r.tags) return false;
            const hasAllTags = selectedTags.every(tag => r.tags.includes(tag));
            if (!hasAllTags) return false;
        }

        // 4. Ingredients Filter (AND logic)
        if (selectedIngs.length > 0) {
            let recipeIngIds;
            
            // FIX: Handle both object array (internal) and string array (external)
            if (r.isInternal) {
                recipeIngIds = r.ingredients.map(i => i.id);
            } else {
                recipeIngIds = r.ingredients || [];
            }
            
            const hasAllIngs = selectedIngs.every(id => recipeIngIds.includes(id));
            if (!hasAllIngs) return false;
        }

        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = "<p class='text' style='grid-column: 1/-1; text-align: center; margin-top: 20px;'>Δεν βρέθηκαν συνταγές με αυτά τα κριτήρια.</p>";
        return;
    }

    filtered.forEach(r => {
        // Create Card
        const card = document.createElement('a');
        card.className = 'card';

        if (r.isInternal) {
            card.href = `./recipe.html?id=${r.id}`;
        } else {
            card.href = r.link;
            card.target = "_blank";
        }

        const img = document.createElement('img');
        img.className = 'card-img';
        img.src = r.picture || logoURL;

        const content = document.createElement('div');
        content.className = 'card-content';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'card-title ubuntu-medium';

        const title = document.createElement(`div`);
        title.textContent = r.title;
        titleDiv.appendChild(title);

        if (!r.isInternal) {
            const icon = document.createElement('i');
            icon.className = `ext-icon fa-brands`;

            if (r.type === 'youtube') {
                icon.classList.add('fa-youtube', 'youtube');
            } else if (r.type === 'facebook') {
                icon.classList.add('fa-facebook', 'facebook');
            } else {
                icon.className = `ext-icon fa-solid fa-arrow-up-right-from-square generic`;
            }
            titleDiv.appendChild(icon);
        }

        content.appendChild(titleDiv);

        if (r.isInternal) {
            const meta = document.createElement('div');
            meta.className = 'card-meta ubuntu-light';
            meta.innerHTML = `<span><i class="fa-regular fa-clock"></i> ${r.time}</span><span><i class="fa-solid fa-utensils"></i> ${r.servings}</span>`;
            content.appendChild(meta);
        }

        card.appendChild(img);
        card.appendChild(content);
        container.appendChild(card);
    });
}

// Initial Load
displayRecipes();

// Search Listener
searchInput.addEventListener('input', (e) => {
    displayRecipes(e.target.value);
});

// */