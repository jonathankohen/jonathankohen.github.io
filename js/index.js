/*jshint esversion: 6 */

exports.printMsg = function() {
    console.log("This is a message from the demo package");
  };

// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server 
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://jkohen:KesheT123@cluster0-nflko.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("reservations").collection("userInput");
  // perform actions on the collection object
  collection.insertOne({
    name: name,
    date: date
  });
  client.close();
});