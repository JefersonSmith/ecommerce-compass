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


document.getElementById('view-all-button').addEventListener('click', function(event) {
    event.preventDefault();
    const productCards = document.querySelectorAll('.top-selling .product-card');
    productCards.forEach(card => {
        card.classList.toggle('hidden');
    });
    this.textContent = this.textContent === 'View All' ? 'View Less' : 'View All';
});



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
