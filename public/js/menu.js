const menuHamburguer = document.querySelector(".menu_hamburguer");
const sidebar = document.querySelector("#sidebar");

menuHamburguer.addEventListener("click", (e) => {
  e.stopPropagation(); 
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (
    !sidebar.contains(e.target) &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active");
  }
});