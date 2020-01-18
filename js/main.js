
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jkohen:<KesheT123>@cluster0-nflko.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


import {
  database,
  reservations,
  name,
  date,
  newReservation,
  dbTarget
} from "index.js";

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyD2wzz2Kbb7Roc6skCHJ-1Anp8lkpxsVik",
  authDomain: "reservation-site-779ee.firebaseapp.com",
  databaseURL: "https://reservation-site-779ee.firebaseio.com",
  projectId: "reservation-site-779ee",
  storageBucket: "reservation-site-779ee.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);

function bleh() {
  newReservation.setAttribute("class", "submitted");

  newReservation.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;

  reservations.appendChild(newReservation);

  dbTarget.set({
    name: this.name,
    date: this.date
  });
}

document.getElementById("subtmit-button").onclick = bleh();

function initMap() {
  var location = { lat: 28.3852, lng: -81.5639 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location
  });
  var marker = new google.maps.Marker({ position: location, map: map });
}
