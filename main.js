window.onscroll = function() {myFunction()};

let navbar = document.querySelector("header");
let fondo = document.querySelector(".tapaFondo");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    fondo.style.display = "flex";


  } else {
    navbar.classList.remove("sticky");
  }
}