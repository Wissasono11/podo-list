const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeButton = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});
