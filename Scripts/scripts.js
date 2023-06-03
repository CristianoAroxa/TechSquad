const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function rotateImages() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(rotateImages, 1000);
