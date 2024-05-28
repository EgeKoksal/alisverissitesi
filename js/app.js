const metinKutusu = document.querySelector('.nav-home');
const dropBox = document.querySelector('.drop-box');

metinKutusu.addEventListener('mouseover', () => {
  dropBox.style.display = 'block';
});

metinKutusu.addEventListener('mouseout', () => {
  dropBox.style.display = 'none';
});