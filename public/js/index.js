// const lib = require("./lib");

const mongodb = require("mongodb");
const { ClientEncryption } = require("mongodb-client-encryption");
const { MongoClient } = require("mongodb");
const assert = require("assert");

// Connection URL
const url =
  "mongodb://jkohen:KesheT123@$[hostlist]/reservations?authSource=$[authSource]";

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  const db = client.db("test");
  assert.equal(null, err);
  client.close();
});

db.collection("userInput")
  .insertOne({
    name: name,
    date: date
  })
  .then(function(result) {
    // process result
  });

var unique = require("uniq");

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

//exports
// const user = require('./user');
// console.log(
//   `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
// );