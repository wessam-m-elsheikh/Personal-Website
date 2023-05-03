"use strict";

// ///////////////////// DROP MENU ////////////////////
const menuOpen = document.querySelector(".drop-down-open");
const menuClose = document.querySelector(".drop-down-close");
const menu = document.querySelector(".nav-list");

// ///////////////////// FUNCTIONS ////////////////////
// open menu
function openMenu() {
  menu.style.display = "flex";
  menuOpen.style.display = "none";
  menuClose.style.display = "inline-block";
  // navItems.forEach((item) => {
  //   item.style.animation = "drop-menu 0.3s linear forwards";
  //   item.style.opacity = "1";
  // });
}

// close menu
function closeMenu() {
  menu.style.display = "none";
  menuClose.style.display = "none";
  menuOpen.style.display = "inline-block";
}

////////////////////////////////////////
// show and hide menu
menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
// to make sure both icon and menu appear on proper screen sizes
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    menuOpen.style.display = "none";
    menuClose.style.display = "none";
    menu.style.display = "flex";
  } else {
    menuOpen.style.display = "inline-block";
    menu.style.display = "none";
  }
});

window.addEventListener("load", () => {
  if (window.innerWidth <= 900) {
    menuOpen.style.display = "inline-block";
    menu.style.display = "none";
    menuClose.style.display = "none";
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////// SLIDER ///////////////////////
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".slider-btn-right");
const previous = document.querySelector(".slider-btn-left");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
const maxSlides = slides.length - 1;

// ///////////////////// FUNCTIONS ////////////////////
// create dots
const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dot" data-slide="${i}"></button>`
    );
  });
};

// show active dot
const activeDot = function (slideNumber) {
  // deactivating them all before passing the active class
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot-active"));

  // then activating the currentslide's dot
  // deactivating them all before passing the active class
  document
    .querySelector(`.dot[data-slide=${slideNumber}]`)
    .classList.add("dot-active");
};
