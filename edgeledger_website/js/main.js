var map;
var marker;
function initMap() {
  //Your Location
  const loc = { lat: 10.13373, lng: 124.83338 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: loc
  });

  //The marker, positioned at location
  marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

//Sticky Menu Background

//Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
