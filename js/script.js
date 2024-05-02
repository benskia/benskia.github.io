"use strict";

/*
Abraham Benski
2024-04-15

This is the primary scripting document for the OhNoDistrollo website.

Filename: benskiabraham_script.js
*/

// Hides or reveals the mobile menu when the hamburger icon is clicked.
function toggleMobileMenu() {
  const nav__icon = document.getElementsByClassName("nav__icon")[0];
  const nav__mobile = document.getElementsByClassName("nav__mobile")[0];

  nav__icon.classList.toggle("active");

  if (nav__mobile.getAttribute("style") == "display: flex") {
    nav__mobile.setAttribute("style", "display: none");
  } else {
    nav__mobile.setAttribute("style", "display: flex");
  }
}
