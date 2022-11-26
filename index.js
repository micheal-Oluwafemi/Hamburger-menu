"use strict";
const firstNavLine = document.querySelector(".bar1");
const secondNavLine = document.querySelector(".bar2");
const thirdNavLine = document.querySelector(".bar3");

const navbarMenu = document.querySelector(".navbar-items");
const navToggler = document.querySelector(".navbar");

// Close function
const closeNav = function () {
  navbarMenu.classList.toggle("links");
};

const first = function () {
  firstNavLine.classList.toggle("first");
};
const second = function () {
  secondNavLine.classList.toggle("middle");
};
const third = function () {
  thirdNavLine.classList.toggle("last");
};

// Toggle function
navToggler.addEventListener("click", () => {
  closeNav();
  first();
  second();
  third();
});

//
