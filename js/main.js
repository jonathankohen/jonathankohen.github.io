function bleh() {
  var reservations = document.getElementById("bleh-body");
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var newReservation = document.createElement("tr");
  newReservation.innerHTML(`<td>${name}</td><td>${date}</td>`);
      
  reservations.appendChild(newReservation);
}

function initMap() {
  // The location of Uluru
  var location = {lat: 28.3852, lng: -81.5639};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: location});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: location, map: map});
}