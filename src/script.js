let scrollAmount = 0;
const scrollStep = 320; // Adjust this to match the width of each game + margin
const carousel = document.querySelector('.carousel');

function scrollLeft() {
    if (scrollAmount > 0) {
        scrollAmount -= scrollStep;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

function scrollRight() {
    // Ensure you don’t scroll past the end
    if (scrollAmount < (carousel.scrollWidth - carousel.clientWidth)) {
        scrollAmount += scrollStep;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
    }
}