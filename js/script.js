// Hamburger
document.getElementById('hamburger').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('hamburger').contains(event.target) || 
                        document.getElementById('dropdownMenu').contains(event.target);

    if (!isClickInside) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
});

// Dropdown
document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;

    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.dropdown').contains(event.target);
    if (!isClickInside) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});


// Show/hide products
function toggleProducts(sectionClass) {
    const hiddenProducts = document.querySelectorAll(`.${sectionClass} .product-card:nth-child(n+5)`);
    const button = document.querySelector(`.${sectionClass} .view-all-button`);

    if (button.textContent === 'View All') {
        hiddenProducts.forEach(function(product) {
            product.style.display = 'block';
        });
        button.textContent = 'View Less';
    } else {
        hiddenProducts.forEach(function(product) {
            product.style.display = 'none';
        });
        button.textContent = 'View All';
    }
}

document.querySelector('.new-arrivals .view-all-button').addEventListener('click', function(event) {
    event.preventDefault();
    toggleProducts('new-arrivals');
});

document.querySelector('.top-selling .view-all-button').addEventListener('click', function(event) {
    event.preventDefault();
    toggleProducts('top-selling');
});


// Carousel
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalCards = cards.length;

function getCardsPerView() {
    if (window.innerWidth <= 768) {
        return 1; 
    } else {
        return 3; 
    }
}

function updateCarousel() {
    const cardsPerView = getCardsPerView();
    const offset = -currentIndex * (100 / cardsPerView);
    carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - cardsPerView;
    }
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});


window.addEventListener('resize', () => {
    updateCarousel();
});


updateCarousel();
