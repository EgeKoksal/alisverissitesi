//navbar dropbox kodu
const metinKutusu = document.querySelector(".nav-shop");
const dropBox = document.querySelector(".drop-box");

metinKutusu.addEventListener("mouseover", () => {
  dropBox.style.display = "block";
});

metinKutusu.addEventListener("mouseout", () => {
  dropBox.style.display = "none";
});
// slider butonların çalışması

const mainSlider = document.querySelectorAll(".swiper-container");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");


nextButton.addEventListener("click", () => {
  mainSlider()
});

prevButton.addEventListener("click", () => {
  mainSlider()
});