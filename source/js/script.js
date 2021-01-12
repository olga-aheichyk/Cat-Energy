var toggleButton = document.querySelector(".navigation__toggle");
var navigationMobile = document.querySelector(".navigation");

toggleButton.addEventListener ("click", function() {
  navigationMobile.classList.toggle("navigation--opened");
});
