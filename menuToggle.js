const buttonHamburguer = document.querySelector("#button__mobile");
const menuMobile = document.querySelector("#nav__menu-mobile");

buttonHamburguer.addEventListener("click", () => {
  buttonHamburguer.classList.toggle("active");
  menuMobile.classList.toggle("active");
});
