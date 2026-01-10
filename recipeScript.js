import { originalRecipes, ingredients as ingDB } from "./database.js";

// --- URL Params & Init ---
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const recipe = originalRecipes.find(r => r.id === id);

if (!recipe) {
    document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Η συνταγή δεν βρέθηκε.</h1>";
    throw new Error("Recipe not found");
}

// --- Theme Logic ---
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// --- Populate Basic Info ---
const logoURL = 'https://res.cloudinary.com/dhon1edrf/image/upload/v1767978226/chefLogo_aek6mg.png';

document.title = recipe.title;
document.getElementById('recipeTitle').textContent = recipe.title;
document.getElementById('recipeDesc').textContent = recipe.description;
document.getElementById('rTime').textContent = recipe.time;
document.getElementById('rServings').textContent = recipe.servings + " " + (recipe.servingsName || "μερίδες");
document.getElementById('recipeImg').src = recipe.picture || logoURL;

// --- Favorites Logic ---
const favBtn = document.getElementById('favBtn');
const favIcon = favBtn.querySelector('i');
let favs = JSON.parse(localStorage.getItem('favRecipes')) || [];

function updateFavIcon() {
    if (favs.includes(id)) {
        favBtn.classList.add('active');
        favIcon.classList.remove('fa-regular');
        favIcon.classList.add('fa-solid');
    } else {
        favBtn.classList.remove('active');
        favIcon.classList.remove('fa-solid');
        favIcon.classList.add('fa-regular');
    }
}
updateFavIcon();

favBtn.addEventListener('click', () => {
    if (favs.includes(id)) {
        favs = favs.filter(fid => fid !== id);
    } else {
        favs.push(id);
    }
    localStorage.setItem('favRecipes', JSON.stringify(favs));
    updateFavIcon();
});

// --- Notes Logic ---
const notesArea = document.getElementById('recipeNotes');
notesArea.value = localStorage.getItem(`note-${id}`) || "";
notesArea.addEventListener('input', () => {
    localStorage.setItem(`note-${id}`, notesArea.value);
});

// --- Ingredients Render Logic (Simplified) ---
// 1. Group by Label
const grouped = {};
recipe.ingredients.forEach(item => {
    const label = item.label || "Υλικά";
    if (!grouped[label]) grouped[label] = [];
    grouped[label].push(item);
});

// 2. Load Crossed Off State
const crossedKey = `crossed-${id}`;
let crossedSet = new Set(JSON.parse(localStorage.getItem(crossedKey)) || []);

// 3. Render
const container = document.getElementById('ingListContainer');

for (const [label, items] of Object.entries(grouped)) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'ing-group';
    
    if (label !== "Υλικά") {
        const h3 = document.createElement('h3');
        h3.textContent = label;
        groupDiv.appendChild(h3);
    }
    
    const ul = document.createElement('ul');
    ul.className = 'ing-list';
    
    items.forEach((item, index) => {
        // Find ingredient name in DB, or fallback to ID
        const dbIng = ingDB.find(i => i.id === item.id) || { name: item.id, plural: null };
        const li = document.createElement('li');
        
        // Construct Text: Amount + Unit (String) + Name
        let text = "";
        
        if (item.amount) text += item.amount + " ";
        if (item.unit) text += item.unit + " ";
        
        // Plural Check for Ingredient Name
        // (If amount > 1 and a plural form exists, use it)
        if (item.amount > 1 && dbIng.plural) {
            text += dbIng.plural;
        } else {
            text += dbIng.name;
        }
        
        li.textContent = text;
        
        // Unique ID for this specific line item for crossing off
        const itemKey = `${label}-${index}`;
        
        if (crossedSet.has(itemKey)) li.classList.add('crossed');
        
        li.addEventListener('click', () => {
            li.classList.toggle('crossed');
            if (li.classList.contains('crossed')) {
                crossedSet.add(itemKey);
            } else {
                crossedSet.delete(itemKey);
            }
            localStorage.setItem(crossedKey, JSON.stringify([...crossedSet]));
        });
        
        ul.appendChild(li);
    });
    
    groupDiv.appendChild(ul);
    container.appendChild(groupDiv);
}

// --- Steps Render Logic ---
const stepsList = document.getElementById('stepsList');

recipe.steps.forEach(step => {
    const li = document.createElement('li');
    li.className = 'step-item';
    
    const div = document.createElement('div');
    
    const p = document.createElement('p');
    p.className = 'step-text';
    p.textContent = step.text;
    div.appendChild(p);
    
    if (step.pic) {
        const img = document.createElement('img');
        img.src = step.pic;
        img.className = 'step-img';
        img.onclick = () => openOverlay(step.pic);
        div.appendChild(img);
    }
    
    li.appendChild(div);
    stepsList.appendChild(li);
});

// --- Overlay Logic ---
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');

function openOverlay(src) {
    overlayImg.src = src;
    overlay.style.display = 'flex';
}

// Also enable for main image
document.getElementById('recipeImg').onclick = function() {
    if (this.src) openOverlay(this.src);
};

overlay.onclick = () => {
    overlay.style.display = 'none';
};
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") overlay.style.display = 'none';
});