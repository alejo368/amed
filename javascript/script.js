let menuIcon = document.querySelector(".iconMenu");
let menuContainer = document.querySelector(".menuMobileContainer");


menuIcon.addEventListener("click", ()=>{
    menuContainer.classList.toggle("menuMobileContainerActive")
});