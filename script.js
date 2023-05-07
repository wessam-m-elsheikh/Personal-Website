"use strict";

// ///////////////////// DROP MENU ////////////////////
const menuOpen = document.querySelector(".drop-down-open");
const menuClose = document.querySelector(".drop-down-close");
const menu = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-link");

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
    closeMenu();
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      closeMenu();
    }
  });
});
