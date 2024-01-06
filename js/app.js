var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", burger);

function burger() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("resp");

    var shadow = document.querySelector("header");
    shadow.classList.toggle("shadow");
}