"use strict";

// navbar variables
const navbarNav = document.querySelector(".navbar-nav");
const navbarToggleBtn = document.querySelector(".nav-toggle-btn");

// navbar toggle functionality
navbarToggleBtn.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
    navbarToggleBtn.classList.toggle("active");
});
