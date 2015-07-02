/// <reference path="typings/tsd.d.ts" />
 
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var app = express();


//Converting the mongoDB URI to a compatible mongoose URI
var mongodbURI = 'mongodb://wickware-admin:R2-pakouhite@ds051831.mongolab.com:51831/heroku_mlcfqv1f';
var mongooseURI = uriUtil.formatMongoose(mongodbURI);

//Attempt to connect to the DB, save the connection 
mongoose.connect(mongooseURI);
var db = mongoose.connection;

//For now, print out the error if one occurs or notify a connection has been established
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connection open!");
});

//Creating the path's for the routes
//var indexRoute = require(path.join(__dirname, 'api/index'));
//app.use('/', indexRoute);

app.get('/', function(req, res) {
  res.send('Hello World!');
});
 
//Use the appropriate port if running on Heroku or Locally
var port = Number(process.env.PORT || 8080);
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;