 // server.js
 var express = require('express');
 var app = express();
 var morgan = require('morgan');

 //app.arguments(morgan('dev'));

 // start the server
 app.listen(7000, function() {
     console.log('Listening on port 7000');
 });

 // route our app
 app.get('*', function(req, res) {
     res.sendFile(__dirname + '/index.html');
 });