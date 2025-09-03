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
    window.location.href = "slideshow.html?id=error";
}

/* Notes */
const notesTextarea = document.getElementById("ssNotes");

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
const ssTitle = document.querySelector(`#ssTitle > h1`);
ssTitle.textContent = recipe.title;

//  Description
const ssDesc = document.querySelector(`#ssDescription`);
ssDesc.textContent = recipe.description;

//  Time
const ssTime = document.querySelector(`#ssTime`);
ssTime.textContent = recipe.time;

//  Servings
const ssPrt = document.querySelector(`#ssPortionInput`);

var prt = recipe.portion;
ssPrt.value = prt;

const ssSrv = document.getElementById(`ssServings`);
ssSrv.textContent = recipe.servings + " " + recipe.servingsName;

function clampPortion(value) {
    const min = parseInt(ssPrt.min);
    const max = parseInt(ssPrt.max);
    value = Math.round(value);
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

ssPrt.addEventListener("input", () => {
    let val = clampPortion(parseInt(ssPrt.value));
    ssPrt.value = val;  // enforce clamping visually
    prt = val / recipe.portion;
    renderIngredients(prt);
});


//  Price
const ssPrice = document.querySelector(`#ssPrice`);
const ssIn = recipe.ingredients;
let price = 0;

ssIn.forEach(item => {
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
});

ssPrice.textContent = price.toFixed(2) + "€";

//  Metric System Toggle
const ssUS = document.getElementById(`ssUS`);
const ssMe = document.getElementById(`ssMe`);
var currentSystem = "US";

ssUS.addEventListener("click", () => {
    if (currentSystem !== "US") {
        ssUS.classList.add("active");
        ssMe.classList.remove("active");
        currentSystem = "US";
        renderIngredients(prt);
    }
});

ssMe.addEventListener("click", () => {
    if (currentSystem !== "ME") {
        ssMe.classList.add("active");
        ssUS.classList.remove("active");
        currentSystem = "ME";
        renderIngredients(prt);
    }
});


function prettyAmount(amount, unitId) {

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
    const ssInList = document.querySelector("#ssIngredientsList > ul");
    ssInList.innerHTML = ""; // clear old list

    // Update servings
    const currentServings = recipe.servings * portionMultiplier;
    ssSrv.textContent = currentServings + " " + recipe.servingsName;

    let totalPrice = 0;

    ssIn.forEach(item => {
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
        ssInList.appendChild(li);
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

    ssPrice.textContent = totalPrice.toFixed(2) + "€";
}




// ----- INITIAL RENDER -----
renderIngredients(1);


//  Steps

const ssSteps = recipe.steps
const ssStep = document.getElementById(`ssStep`);

const ssStepButtons = document.getElementById(`ssStepButtons`);
const ssPic = document.getElementById(`ssImage`);
const ssImg = document.querySelector(`#ssImage > img`);
const ssMidC = document.getElementById(`ssMiddleC`);
var currentStep = 0;
const def = "https://img.freepik.com/premium-vector/chef-hat-logo-illustration_746614-100.jpg";

console.log(ssSteps[currentStep]);

ssStep.textContent = "1. " + ssSteps[0].text;
if (ssSteps[0].pic) {
    ssPic.classList.add(`shown`);
    ssImg.src = ssSteps[currentStep].pic;
} else {
    ssPic.classList.remove(`shown`);
    ssImg.src = def;
}

ssStepButtons.addEventListener("click", (event) => {
    if (event.target.id != "ssStepPrevious" && event.target.id != "ssStepNext") return;

    // Force reflow to make sure browser registers the opacity = 0
    void ssMidC.offsetWidth;

    if (event.target.id === "ssStepPrevious") {
        if (currentStep === 0) return;

        // Reset transition so fade-out happens instantly
        ssMidC.style.transition = "none";
        ssMidC.style.opacity = 0;
        currentStep--;
    } else {
        if (currentStep === (ssSteps.length - 1)) return;

        // Reset transition so fade-out happens instantly
        ssMidC.style.transition = "none";
        ssMidC.style.opacity = 0;
        currentStep++;
    }

    ssStep.textContent = (currentStep + 1) + ". " + ssSteps[currentStep].text;

    // Apply fade-in again
    requestAnimationFrame(() => {
        ssMidC.style.transition = "opacity 0.3s";
        ssMidC.style.opacity = 1;
    });

    if (ssSteps[currentStep].pic) {
        ssPic.classList.add("shown");
        ssImg.src = ssSteps[currentStep].pic;
    } else {
        ssPic.classList.remove("shown");
        ssImg.src = def;
    }

    console.log(ssSteps[currentStep]);
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

const ingredList = document.querySelectorAll("#ssIngredientsList li")

ingredList.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('crossed');
    });
});