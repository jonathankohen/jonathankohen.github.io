var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['foo', 'bar'],
function   (foo,   bar) {
    //foo and bar are loaded according to requirejs
    //config, but if not found, then node's require
    //is used to load the module.
});

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');

// // Load HTTP module
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 8000;
// // Create HTTP server
// const server = http.createServer((req, res) => {
//   // Set the response HTTP header with HTTP status and Content type
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   // Send the response body "Hello World"
//   res.end("Hello World\n");
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const MongoClient = require("mongodb").MongoClient;
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
