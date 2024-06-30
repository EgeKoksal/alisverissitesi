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
homeBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/alisverissitesi/index.html";
});

const sorniBtn = document.querySelector(".baslik");
sorniBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/alisverissitesi/index.html";
});

//kıyafete tıklayınca pencere açılması
const kutular = document.querySelectorAll(".image");
const önPencere = document.querySelector(".pencere");
const pencereResmi = document.querySelector(".pencere-resmi");


kutular.forEach(kutu => {
  kutu.addEventListener("click", () => {
    önPencere.style.display = "block";
    pencereResmi.src = kutu.src;
  });
});


// pencere kapatma
const kapama = document.querySelector(".kapatma");
const kapamaPenc = document.querySelector(".pencere");

kapama.addEventListener("click", () => {
  kapamaPenc.style.display = "none";
})

// slider butonların çalışması
/*
const swiperContainerlar = document.querySelectorAll(".swiper-slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
let currentPosition = 0; // Şu anki container indeksini takip eder

nextButton.addEventListener("click", () => {
  currentPosition++;
  if (currentPosition >= swiperContainerlar.length) {
    currentPosition = 0;
  }
  swiperContainerlar[currentPosition - 1].classList.add("hidden");
  swiperContainerlar[currentPosition].classList.remove("hidden");
});

prevButton.addEventListener("click", () => {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = swiperContainerlar.length - 1;
  }
  swiperContainerlar[currentPosition + 1].classList.add("hidden");
  swiperContainerlar[currentPosition].classList.remove("hidden");
});
*/