const toggleButton = document.querySelector(".navigation__toggle");
const navigationMobile = document.querySelector(".navigation");

toggleButton.addEventListener ("click", () => {
  navigationMobile.classList.toggle("navigation--opened");
});
