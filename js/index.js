// var unique = require('uniq');

// var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// console.log(unique(data));

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

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

const mongodb = require('mongodb');
const { ClientEncryption } = require('mongodb-client-encryption');
const { MongoClient } = require('mongodb');