var toggleButton = document.querySelector(".navigation__toggle");
var navigationMobile = document.querySelector(".navigation");

toggleButton.addEventListener ("click", function() {
  navigationMobile.classList.toggle("navigation--opened");
});


/*
function initMap() {
  var coordinates = {lat: 59.938744880956804, lng: 30.32296241647558},

      map = new google.maps.Map(document.querySelector(".location__map"), {
          center: coordinates
      });

      image = "img/map-pin-mobile.png",
      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}
*/
