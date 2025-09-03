/*  Dynamically populating the recipe page */

// Importing the recipes database
import { recipes } from "./recipes.js";
// Importing the ingredients database
import { ingredients } from "./ingredients.js";
// Importing the measurements database
import { measurements } from "./ingredients.js";
// Importing the conversion values
import { conversions } from "./ingredients.js";

// Get the current URL parameters
const params = new URLSearchParams(window.location.search);

// Get the value of 'id'
const recipeId = params.get('id'); // i.e.: "koulourakia"

// If invalid or unknown id value, fall back on the error page
if (!recipeId) {
    window.location.href = "recipe.html?id=error";
}


/*  Favourites  */
const favButton = document.querySelector(`.recipeFavouriteButton`);

// Get favorites from localStorage
let favRecipes = JSON.parse(localStorage.getItem("favRecipes")) || [];

// Set initial state based on whether current recipe is favorited
if (favRecipes.includes(recipeId)) {
    favButton.classList.add('active');
}

function toggleFavorite(recipeId) {
    let favs = JSON.parse(localStorage.getItem("favRecipes")) || [];

    if (favs.includes(recipeId)) {
        favs = favs.filter(id => id !== recipeId); // remove
        favButton.classList.remove('active');
    } else {
        favs.push(recipeId); // add
        favButton.classList.add('active');
    }

    localStorage.setItem("favRecipes", JSON.stringify(favs));
}

favButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleFavorite(recipeId);
});

/* Notes */
const notesTextarea = document.getElementById("recipeNotes");

// Load saved note for this recipe (if any)
const savedNote = localStorage.getItem("note-" + recipeId);
if (savedNote) {
  notesTextarea.value = savedNote;
}

// Save note whenever the user types (auto-save)
notesTextarea.addEventListener("input", () => {
  localStorage.setItem("note-" + recipeId, notesTextarea.value);
});



// Get the whole recipe info from the database
const recipe = recipes.find(r => r.id === recipeId) || recipes.find(r => r.id === "error");

if (recipe.id === "error") {
    favButton.remove();
}

//  Title
const rTitle = document.querySelector(`#recipeTitle > h1`);
rTitle.textContent = recipe.title;

//  Description
const rDesc = document.querySelector(`#recipeDescription`);
rDesc.textContent = recipe.description;

//  Link
const rLink = document.getElementById(`recipeLink`);
if (recipe.link) {
    rLink.classList.add(`shown`);
    rLink.href = recipe.link;
}

//  Time
const rTime = document.querySelector(`#recipeTime`);
rTime.textContent = recipe.time;

//  Servings
const rPrt = document.querySelector(`#recipePortionInput`);

var prt = recipe.portion;
rPrt.value = prt;

const rSrv = document.getElementById(`recipeServings`);
rSrv.textContent = recipe.servings + " " + recipe.servingsName;

function clampPortion(value) {
    const min = parseInt(rPrt.min);
    const max = parseInt(rPrt.max);
    value = Math.round(value);
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

rPrt.addEventListener("input", () => {
    let val = clampPortion(parseInt(rPrt.value));
    rPrt.value = val;  // enforce clamping visually
    prt = val / recipe.portion;
    renderIngredients(prt);
});


//  Price
const rPrice = document.querySelector(`#recipePrice`);
const rIn = recipe.ingredients;
let price = 0;

rIn.forEach(item => {
    console.log(item.name);
    const ing = ingredients.find(ing => ing.id === item.id);
    if (!ing) return;

    // convert recipe amount into ingredient base unit
    let amountInBaseUnit;
    try {
        amountInBaseUnit = convert(item.amount, item.unit, ing.unit);
    } catch (e) {
        // no conversion available → assume units match directly
        amountInBaseUnit = item.amount;
    }

    // cost = amount (in base unit) × price per base unit
    price += amountInBaseUnit * ing.price;
    console.log(price);
});

rPrice.textContent = price.toFixed(2) + "€";

//  Picture
const rPic = document.querySelector(`#recipeImage > img`);
rPic.src = recipe.picture || "https://img.freepik.com/premium-vector/chef-hat-logo-illustration_746614-100.jpg";

//  Slideshow
const rSS = document.getElementById(`recipeSSButton`);
rSS.href = "./slideshow.html?id=" + recipe.id;

//  Metric System Toggle
const rUS = document.getElementById(`recipeUS`);
const rMe = document.getElementById(`recipeMe`);
var currentSystem = "US";

rUS.addEventListener("click", () => {
    if (currentSystem !== "US") {
        rUS.classList.add("active");
        rMe.classList.remove("active");
        currentSystem = "US";
        renderIngredients(prt);
    }
});

rMe.addEventListener("click", () => {
    if (currentSystem !== "ME") {
        rMe.classList.add("active");
        rUS.classList.remove("active");
        currentSystem = "ME";
        renderIngredients(prt);
    }
});


function prettyAmount(amount, unitId) {
    console.log("prettyAmount called with", amount, unitId);

    let unit = measurements.find(u => u.id === unitId);

    // Round to 2 decimals initially
    amount = Math.round(amount * 100) / 100;

    // Scaling rules
    if (unitId === "tsp" && amount >= 3) {
        // 3 tsp = 1 tbsp
        amount = convert(amount, "tsp", "tbsp");
        unitId = "tbsp";
    }
    if (unitId === "tbsp" && amount >= 16) {
        // 16 tbsp = 1 cup
        amount = convert(amount, "tbsp", "cup");
        unitId = "cup";
    }
    if (unitId === "mL" && amount >= 250) {
        // 250 mL ~ 1 cup
        amount = convert(amount, "mL", "cup");
        unitId = "cup";
    }
    if (unitId === "cup" && amount >= 4) {
        // 4 Cups ~ 1 L
        amount = convert(amount, "cup", "L");
        unitId = "L";
    }
    if (unitId === "g" && amount >= 1) {
        // 1000 g ~ 1 kg
        console.log("BIKA")
        amount = convert(amount, "g", "kg");
        unitId = "kg";
    }

    // Final rounding: whole numbers for cups/tbsp/tsp, 1 decimal otherwise
    if (["cup", "tbsp", "tsp"].includes(unitId)) {
        amount = Math.round(amount * 10) / 10; // nearest 0.1
    } else {
        amount = Math.round(amount * 100) / 100; // 2 decimals
    }

    return { amount, unit: measurements.find(u => u.id === unitId) };
}







function convert(amount, fromUnit, toUnit) {
    if (fromUnit === toUnit) return amount;
    if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
        return amount * conversions[fromUnit][toUnit];
    }
    throw new Error(`No conversion from ${fromUnit} to ${toUnit}`);
}


function renderIngredients(portionMultiplier = 1) {
    const rInList = document.querySelector("#recipeIngredientsList");
    rInList.innerHTML = ""; // clear old content

    // Update servings
    const currentServings = recipe.servings * portionMultiplier;
    rSrv.textContent = currentServings + " " + recipe.servingsName;

    let totalPrice = 0;

    // --- Step A: group ingredients by label ---
    const grouped = {};
    rIn.forEach(item => {
        if (!grouped[item.label]) grouped[item.label] = [];
        grouped[item.label].push(item);
    });

    // --- Step B: loop through groups and render ---
    for (const [label, items] of Object.entries(grouped)) {
        // Add a title
        const h4 = document.createElement("h4");
        h4.textContent = label + ":";
        rInList.appendChild(h4);

        // Add a <ul> for this label
        const ul = document.createElement("ul");
        rInList.appendChild(ul);

        items.forEach(item => {
            const li = document.createElement("li");
            const ing = ingredients.find(i => i.id === item.id);
            let Iunit = measurements.find(u => u.id === item.unit);

            // Step 0: determine effective amount (scaled if multipliable)
            const effectiveAmount = Iunit.multipliable ? item.amount * portionMultiplier : item.amount;
            let amount = effectiveAmount;

            // Step 1: scale amount in its own unit
            let { amount: scaledAmount, unit: scaledUnit } = prettyAmount(amount, Iunit.id);
            amount = scaledAmount;
            Iunit = scaledUnit;

            // Step 2: convert to target system if needed
            if (Iunit.system !== "gb") {
                if (currentSystem === "US" && Iunit.system === "me") {
                    let converted = convert(amount, Iunit.id, Iunit.alt);
                    ({ amount, unit: Iunit } = prettyAmount(converted, Iunit.alt));
                } else if (currentSystem === "ME" && Iunit.system === "us") {
                    let converted = convert(amount, Iunit.id, Iunit.alt);
                    ({ amount, unit: Iunit } = prettyAmount(converted, Iunit.alt));
                }
            }

            // Step 3: build display text
            let txt = amount;
            if (Iunit.space) txt += " ";
            txt += (Iunit.plural && amount > 1) ? Iunit.plural : Iunit.name;
            txt += " ";
            txt += (ing.plural && amount > 1) ? ing.plural : ing.name;
            li.textContent = txt;

            // Optional fade-in
            li.style.opacity = 0;
            ul.appendChild(li);
            requestAnimationFrame(() => {
                li.style.transition = "opacity 0.3s";
                li.style.opacity = 1;
            });

            // Step 4: update price
            let amountInBaseUnit;
            try {
                amountInBaseUnit = convert(effectiveAmount, item.unit, ing.unit);
            } catch (e) {
                amountInBaseUnit = effectiveAmount;
            }
            totalPrice += amountInBaseUnit * ing.price;
        });
    }

    rPrice.textContent = totalPrice.toFixed(2) + "€";
}





// ----- INITIAL RENDER -----
renderIngredients(1);


//  Steps

const rStepsList = document.querySelector(`#recipeSteps > ol`);
const rSteps = recipe.steps;

console.log(rSteps);

rSteps.forEach(step => {
    // Create elements
    const li = document.createElement("li");
    const stepDiv = document.createElement("div");
    stepDiv.className = "recipeStep";

    const p = document.createElement("p");
    p.textContent = step.text;

    // Always add <p>
    stepDiv.appendChild(p);

    // Add <img> only if imageUrl is provided
    if (step.pic) {
        const img = document.createElement("img");
        img.className = "zoomable";
        img.src = step.pic;
        stepDiv.appendChild(img);
    }

    // Put div inside li
    li.appendChild(stepDiv);

    // Append to the list
    rStepsList.appendChild(li);
});

const zoomableImages = document.querySelectorAll('.zoomable');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

overlay.style.display = 'none';

zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayImg.src = img.src; // show clicked image
    });
});

// Close overlay when clicking background
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) { // only close if clicking outside image
        overlay.style.display = 'none';
    }
});

// Close overlay with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.style.display = 'none';
    }
});

const ingredList = document.querySelectorAll("#recipeIngredientsList li")

console.log(ingredList);

ingredList.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('crossed');
    });
});



