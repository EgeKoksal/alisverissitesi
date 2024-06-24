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
const imageHover = önPencere.querySelectorAll(".image-hover")

kutular.forEach(kutu => {
  kutu.addEventListener("click", () => {
    önPencere.style.display = "block"; // Ön pencereyi göster
    const resimUrl = kutu.src; // Tıklanan resmin URL'sini al
    imageHover.src = resimUrl; // Ön penceredeki resmin URL'sini ayarla
  });
});

// pencere kapatma
const kapama = document.querySelector(".kapatma");
const kapamaPenc = document.querySelector(".pencere");

kapama.addEventListener("click", () => {
  kapamaPenc.style.display = "none";
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
