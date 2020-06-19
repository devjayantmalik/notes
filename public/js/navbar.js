"use strict";

const toggleNav = () => {
  let burgerClasses = document.querySelector(".navbar-burger").classList;
  let menuClasses = document.querySelector(".navbar-menu").classList;

  if (
    burgerClasses.contains("is-active") &&
    menuClasses.contains("is-active")
  ) {
    burgerClasses.remove("is-active");
    menuClasses.remove("is-active");
  } else {
    burgerClasses.add("is-active");
    menuClasses.add("is-active");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".navbar-burger").onclick = toggleNav;
});
