import {
  reservations,
  name,
  date,
  newReservation,
  writeUserData
} from "index.js";

function bleh() {
  newReservation.setAttribute("class", "submitted");

  newReservation.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;

  reservations.appendChild(newReservation);

  client.connect(err => {
    const collection = client.db("reservations").collection("userInput");
    collection.writeUserData();
    client.close();
  });
}

document.getElementById("subtmit-button").onclick = bleh();

function initMap() {
  const location = { lat: 28.3852, lng: -81.5639 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location
  });
  const marker = new google.maps.Marker({ position: location, map: map });
}
