// Top Banner
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.querySelector('.top-banner').style.display = 'none'
    });



// Hamburger
document.getElementById("hamburger").addEventListener("click", function () {
  var dropdownMenu = document.getElementById("dropdownMenu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

document.addEventListener("click", function (event) {
  var isClickInside =
    document.getElementById("hamburger").contains(event.target) ||
    document.getElementById("dropdownMenu").contains(event.target);

  if (!isClickInside) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});

// Dropdown
document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;

    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

document.addEventListener("click", function (event) {
  const isClickInside = document
    .querySelector(".dropdown")
    .contains(event.target);
  if (!isClickInside) {
    document.querySelector(".dropdown-menu").style.display = "none";
  }
});

// Cards

document.addEventListener("DOMContentLoaded", function() {
  function loadProducts(category, containerId) {
    const productList = document.getElementById(containerId);

    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
          const productCard = document.createElement("article");
          productCard.classList.add("product-card");

          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <div class="product-info">
              <h3>${product.name}</h3>
              <div class="product-rating">
                <span>${"⭐".repeat(product.rating)}</span>
                <span>${product.rating}/5</span>
              </div>
              <p class="product-price">
                $${product.price}
                ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ""}
                ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ""}
              </p>
            </div>
          `;

          productList.appendChild(productCard);
        });
      })
      .catch(error => {
        console.error("Erro ao carregar os produtos:", error);
      });
  }

  loadProducts("newArrivals", "product-list-new-arrivals");
  loadProducts("topSelling", "product-list-top-selling");
});


// Show/hide products
function toggleProducts(sectionClass) {
  const hiddenProducts = document.querySelectorAll(
    `.${sectionClass} .product-card:nth-child(n+5)`
  );
  const button = document.querySelector(`.${sectionClass} .view-all-button`);

  if (button.textContent === "View All") {
    hiddenProducts.forEach(function (product) {
      product.style.display = "block";
    });
    button.textContent = "View Less";
  } else {
    hiddenProducts.forEach(function (product) {
      product.style.display = "none";
    });
    button.textContent = "View All";
  }
}

document
  .querySelector(".new-arrivals .view-all-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleProducts("new-arrivals");
  });

document
  .querySelector(".top-selling .view-all-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleProducts("top-selling");
  });

// Carousel
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

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

prevBtn.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - cardsPerView;
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  const cardsPerView = getCardsPerView();
  if (currentIndex < totalCards - cardsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  updateCarousel();
});

updateCarousel();

// Newsletter validation
const emailInput = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");
const message = document.getElementById("message");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    message.textContent = "Email successfully registered!";
    message.classList.add("success");
    message.classList.remove("error");

    emailInput.value = "";
  } else {
    message.textContent = "Please enter a valid email";
    message.classList.remove("success");
    message.classList.add("error");
  }
});


