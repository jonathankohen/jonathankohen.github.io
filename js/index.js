const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test?w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const reservations = document.getElementById("bleh-body");
const name = document.getElementById("name").value;
const date = document.getElementById("date").value;
const newReservation = document.createElement("tr");
const writeUserData = db.collection.insertOne({
  name: name,
  date: date
});

export { database, reservations, name, date, newReservation, writeUserData };
