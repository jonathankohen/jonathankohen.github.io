/*jshint esversion: 6 */

/*global let name = document.getElementById("name").value;*/

function bleh() {
  
  let date = document.getElementById("date").value;
  let reservationsTable = document.getElementById("bleh-body");
  let newTableRow = document.createElement("tr");
  newTableRow.setAttribute("class", "submitted");
  newTableRow.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;

  reservationsTable.appendChild(newTableRow);
}

bleh();

// let MongoClient = require("mongodb").MongoClient;
// MongoClient.connect(
//   "mongodb+srv://jkohen:KesheT123@cluster0-nflko.gcp.mongodb.net/test?retryWrites=true&w=majority",
//   function(err, client) {
//     if (err) throw err;

//     let db = client.db("reservations");
//     db.collection("userInput")
//       .find()
//       .toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         client.close();
//       });
//   }
// );

var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

// const uri =
//   "mongodb+srv://jkohen:KesheT123@cluster0-nflko.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   const collection = client.db("reservations").collection("userInput");
//   // perform actions on the collection object
//   collection.insertOne({
//     name: name,
//     date: date
//   });
//   client.close();
// });
