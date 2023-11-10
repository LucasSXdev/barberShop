const images = document.querySelectorAll("#galery__container img");
const modal = document.querySelector(".big__image");
const span = document.querySelector(".big__image span");
const modalImg = document.querySelector(".big__image img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = image.getAttribute("src");
  });
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});
