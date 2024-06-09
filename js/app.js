
//navbar dropbox kodu
const metinKutusu = document.querySelector(".nav-shop");
const dropBox = document.querySelector(".drop-box");

metinKutusu.addEventListener("mouseover", () => {
  dropBox.style.display = "block";
});

metinKutusu.addEventListener("mouseout", () => {
  dropBox.style.display = "none";
});



//anasayfa dön butonları
const homeBtn = document.querySelector(".nav-home");
homeBtn.addEventListener("click", () =>{
window.location.href = "http://127.0.0.1:5501/alisverissitesi/index.html";
});

const sorniBtn = document.querySelector(".baslik");
sorniBtn.addEventListener("click", () =>{
window.location.href = "http://127.0.0.1:5501/alisverissitesi/index.html";
})



// slider butonların çalışması
const mainSlider = document.querySelectorAll(".swiper-container");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");




/*nextButton.addEventListener("click", () => {
  mainSlider()
});

prevButton.addEventListener("click", () => {
  mainSlider()
});*/