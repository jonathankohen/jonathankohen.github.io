function bleh(e) {
  e.preventDefault();
  var reservations = document.getElementById("bleh-body");
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var newReservation = document.createElement("tr");
  newReservation.innerHTML(`<td class="data table-hover table-light">${name}</td>
      <td class="data table-hover table-light">${date}</td>`);
  reservations.appendChild(newReservation);
}

function initMap() {
  // The location of Uluru
  var location = {lat: 40.8054491, lng: -73.9654415};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 7, center: location});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: location, map: map});
}