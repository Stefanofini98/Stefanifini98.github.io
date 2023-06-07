"use strict";
const pag1 = document.querySelector(".pag-1");
const pag2 = document.querySelector(".pag-2");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btnGin = document.getElementById("btn-gin");
const btnWine = document.getElementById("btn-wine");
const btnDrink = document.getElementById("btn-drink");
const filterGin = document.querySelector(".filter-gin");
const filterWine = document.querySelector(".filter-wine");
const filterDrink = document.querySelector(".filter-drink");

btn1.addEventListener("click", () => {
  pag1.classList.remove("d-none");
  pag2.classList.add("d-none");
  btn1.classList.add("selected");
  btn2.classList.remove("selected");
});
btn2.addEventListener("click", () => {
  pag2.classList.remove("d-none");
  pag1.classList.add("d-none");
  btn2.classList.add("selected");
  btn1.classList.remove("selected");
});
btnGin.addEventListener("click", () => {
  console.log("ciao");
  filterGin.classList.remove("d-none");
  filterWine.classList.add("d-none");
  filterDrink.classList.add("d-none");
  btnGin.classList.add("selected");
  btnWine.classList.remove("selected");
  btnDrink.classList.remove("selected");
});
btnWine.addEventListener("click", () => {
  filterWine.classList.remove("d-none");
  filterGin.classList.add("d-none");
  btnGin.classList.remove("selected");
  btnWine.classList.add("selected");
  filterDrink.classList.add("d-none");
  btnDrink.classList.remove("selected");
});
btnDrink.addEventListener("click", () => {
  filterDrink.classList.remove("d-none");
  filterGin.classList.add("d-none");
  filterWine.classList.add("d-none");
  btnDrink.classList.add("selected");
  btnGin.classList.remove("selected");
  btnWine.classList.remove("selected");
});

/**
 * Preloader
 */
let preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
