const buttonTop = document.getElementById("buttonToTop");

window.addEventListener("scroll", () => {
  const shouldDisplay = window.scrollY > 300;
  buttonTop.style.display = shouldDisplay ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

buttonTop.addEventListener("click", scrollToTop);
