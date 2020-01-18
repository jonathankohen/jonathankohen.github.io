var database = firebase.database();
var reservations = document.getElementById("bleh-body");
var name = document.getElementById("name").value;
var date = document.getElementById("date").value;
var newReservation = document.createElement("tr");
var dbTarget = firebase.database().ref("Reservations");


export {
  database,
  reservations,
  name,
  date,
  newReservation,
  reservationsListRef,
};
