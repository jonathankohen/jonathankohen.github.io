var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jkohen:KesheT123@cluster0-nflko.gcp.mongodb.net/test?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("reservations").collection("userInput");
  // perform actions on the collection object
  collection.insertOne({
    name: name,
    date: date
  });
  client.close();
});


document.getElementById("subtmit-button").onclick = bleh();

function bleh() {
  const reservationsTable = document.getElementById("bleh-body");
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const newReservation = document.createElement("tr");
  newReservation.setAttribute("class", "submitted");
  newReservation.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;
  reservationsTable.appendChild(newReservation);
}
