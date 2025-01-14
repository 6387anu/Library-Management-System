// script.js

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "https://wallpaperaccess.com/full/5487881.jpg",
        "https://wallpaperaccess.com/full/4907599.jpg",
        "https://images.pexels.com/photos/6550162/pexels-photo-6550162.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=800",
        
    ];

    const heroSection = document.querySelector('.hero');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentImageIndex = 0; // Start at the first image

    // Function to update the background image and highlight the active dot
    function updateBackgroundImage(index) {
        heroSection.style.backgroundImage = `url(${images[index]})`;
        updateActiveDot(index);
    }

    // Function to update the active dot (highlight the active dot)
    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    // Function to change the image automatically
    function autoChangeBackground() {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0; // Reset to the first image
        }

        console.log('Auto Change Background to Index:', currentImageIndex);  // Debugging output
        updateBackgroundImage(currentImageIndex);
    }

    // Start auto changing the image every 4 seconds
    setInterval(autoChangeBackground, 4000);

    // Handle click event for each dot
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(dot.getAttribute('data-index'));
            currentImageIndex = index; // Set current image index to clicked dot
            console.log('Dot Clicked, Index:', currentImageIndex);  // Debugging output
            updateBackgroundImage(currentImageIndex);
        });
    });

    // Initial setup: Set the first image and dot
    updateBackgroundImage(currentImageIndex);
});
//admin
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});