const btn = document.querySelector(".btn");
const CloseIcon = document.querySelector(".close-icon");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");


btn.addEventListener('click', function(){
  trailerContainer.classList.remove("active");
});

CloseIcon.addEventListener('click', function(){
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});