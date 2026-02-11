const menu = document.getElementById("menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    menu.classList.add("show")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show")
})