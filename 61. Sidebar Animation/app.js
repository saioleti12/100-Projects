const menuBtn = document.getElementById("menu");

const sidebar = document.getElementById("sidebar")

const content = document.querySelector("#content")

menuBtn.addEventListener('click', () =>{
  sidebar.classList.toggle("active");
  content.classList.toggle("active")
})