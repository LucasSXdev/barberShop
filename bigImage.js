const images = document.querySelectorAll("#galery__container img");
const modalImg = document.querySelector(".big__image");
const span = document.querySelector(".big__image span");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.style.display = "block";
    modalImg.src = image.getAttribute("src");
  });
});

span.addEventListener("click", () => {
  modalImg.style.display = "none";
});
