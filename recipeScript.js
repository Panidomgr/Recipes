import { originalRecipes } from "./database.js";

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
const logoURL = 'https://res.cloudinary.com/dhon1edrf/image/upload/f_auto,q_auto/v1767978226/chefLogo_aek6mg.png';

document.title = recipe.title;
document.getElementById('recipeTitle').textContent = recipe.title;
document.getElementById('recipeDesc').textContent = recipe.description;
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

// --- Ingredients Render Logic (FIXED) ---

// ΠΡΟΣΘΗΚΗ: Ορισμός του crossedKey και crossedSet που έλειπαν
const crossedKey = `crossed-${id}`;
let crossedSet = new Set(JSON.parse(localStorage.getItem(crossedKey)) || []);

const hasAnyFor = recipe.ingredients.some(item => item.for);
const grouped = {};

recipe.ingredients.forEach(item => {
    let groupName = !hasAnyFor ? "none" : (item.for || "Για το Φαγητό:");
    if (!grouped[groupName]) grouped[groupName] = [];
    grouped[groupName].push(item);
});

const container = document.getElementById('ingListContainer');
container.innerHTML = "";

for (const [groupName, items] of Object.entries(grouped)) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'ing-group';

    if (groupName !== "none") {
        const h3 = document.createElement('h3');
        h3.textContent = groupName;
        groupDiv.appendChild(h3);
    }

    const ul = document.createElement('ul');
    ul.className = 'ing-list';

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;

        const itemKey = `${groupName}-${index}`;
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

const mainImg = document.getElementById('recipeImg');
if (mainImg) {
    mainImg.onclick = function () { if (this.src) openOverlay(this.src); };
}

overlay.onclick = () => { overlay.style.display = 'none'; };
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") overlay.style.display = 'none';
});
