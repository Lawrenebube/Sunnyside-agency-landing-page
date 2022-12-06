const menuBar = document.querySelector('.menu-bar');
const menuOptions = document.querySelector(".menu");

function menuDrop() {
    menuOptions.classList.toggle('rand');
}

 menuBar.addEventListener("click",menuDrop);