/*jshint esversion: 6 */

function bleh() {
  const name = document.getElementById("name").value;
  console.log(name);
  const date = document.getElementById("date").value;
  console.log(date);

  const reservationsTable = document.getElementById("bleh-body");
  console.log(reservationsTable);
  const newTableRow = document.createElement("tr");
  console.log(newTableRow);
  newTableRow.setAttribute("class", "submitted");
  console.log(newTableRow);
  newTableRow.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;
  console.log(newTableRow);

  reservationsTable.appendChild(newTableRow);
  console.log(reservationsTable);
}

let MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb+srv://jkohen:KesheT123@cluster0-nflko.gcp.mongodb.net/test?retryWrites=true&w=majority", function(err, client){
   if(err) throw err;
   
   let db = client.db('reservations');
   db.collection('userInput').find().toArray(function(err, result){
     if(err) throw err;
     console.log(result);
     client.close();
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
