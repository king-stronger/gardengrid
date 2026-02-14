const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const openMenu = document.getElementById("open-menu");

openMenu.addEventListener("click", () => {
    menu.classList.toggle("show")
    menuIcon.classList.toggle("ri-menu-line")
    menuIcon.classList.toggle("ri-close-large-line")
})
