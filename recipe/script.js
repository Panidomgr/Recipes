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

const ingredList = document.querySelectorAll(".recipeIngredientsList li")

console.log(ingredList);

ingredList.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('crossed');
    });
});