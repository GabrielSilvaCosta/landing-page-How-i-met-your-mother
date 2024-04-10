const menuIcon = document.querySelector(".bx-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", toggleMenuIcon);
navbar.addEventListener("click", toggleMenuIcon);

function toggleMenuIcon() {
    menuIcon.classList.toggle("active");
    navbar.classList.toggle("active");
}
