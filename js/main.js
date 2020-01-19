let name = document.getElementById("name").value;
let date = document.getElementById("date").value;

function bleh() {

  let reservationsTable = document.getElementById("bleh-body");
  let newTableRow = document.createElement("tr");
  newTableRow.setAttribute("class", "submitted");
  newTableRow.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;

  reservationsTable.appendChild(newTableRow);
}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://$[jkohen]:$[KesheT123]@$[hostlist]/$[database]?authSource=$[authSource]';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  const db = client.db("test");
  assert.equal(null, err);
  client.close();
});

db.collection('userInput').insertOne({
  name: name,
  date: date
})
.then(function(result) {
  // process result
})