// Example: Change background color on button click
const changeColorButton = document.getElementById('changeColorButton');
const content = document.querySelector('.content');

changeColorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    content.style.backgroundColor = randomColor;
});
const bannerButton = document.getElementById('shopNowBtn');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
const discountCodeSpan = document.getElementById('discountCode');

bannerButton.addEventListener('click', () => {
    modal.style.display = 'block';
    const discountCode = generateDiscountCode();
    discountCodeSpan.textContent = discountCode;
});

span.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function generateDiscountCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let discountCode = '';
    for (let i = 0; i < 8; i++) {
        discountCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return discountCode;
}
// JavaScript code for animations
const image = document.querySelector('.content img');

// Apply animation on image load
window.addEventListener('load', () => {
    image.style.opacity = 0; // Set initial opacity to 0
    fadeIn(image);
});

// Function to fade in an element
function fadeIn(element) {
    let opacity = 0;
    const duration = 2000; // Animation duration in milliseconds

    const fadeInInterval = setInterval(() => {
        element.style.opacity = opacity;
        opacity += 0.01;
        if (opacity >= 1) {
            clearInterval(fadeInInterval); // Stop the interval when opacity reaches 1
        }
    }, duration / 100); // Update opacity every 10ms for a smooth animation
}
const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.querySelector('span').textContent;
        alert(`You selected category: ${category}`);
        // Add your logic for category selection here
    });
});
// JavaScript code for button click event (if needed)
const shopNowButtons = document.querySelectorAll('.shop-now-button');

shopNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Shop Now Clicked!'); // Add your logic for button click event here
    });
});
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')



searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})
document.addEventListener("DOMContentLoaded", function () {
    var dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  
    document.addEventListener("click", function () {
      dropdowns.forEach(function (dropdown) {
        dropdown.querySelector(".dropdown-content").style.display = "none";
      });
    });
  });
  const images = document.querySelectorAll(".blog-image");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const url = image.getAttribute("data-url");
      window.location.href = url;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const cartItems = [];
    const cartTotal = document.getElementById("cart-total");

    const addButtons = document.querySelectorAll(".add-to-cart");
    addButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseFloat(button.getAttribute("data-price"));

            cartItems.push({ name: productName, price: productPrice });

            const cartList = document.getElementById("cart-items");
            const listItem = document.createElement("li");
            listItem.textContent = productName + " - $" + productPrice.toFixed(2);
            cartList.appendChild(listItem);

            const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
            cartTotal.textContent = totalPrice.toFixed(2);
        });
    });
});
    