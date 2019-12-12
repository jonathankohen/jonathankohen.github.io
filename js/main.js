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
