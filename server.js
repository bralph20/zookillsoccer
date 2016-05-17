// include modules
//https://blackbricksoftware.com/bit-on-bytes/77-basic-node-js-web-server-setup

var express = require('express'),
    app = express(),
    path = require('path'),
    morgan = require('morgan'),
    favicon = require('serve-favicon');

// serve static content
console.log("server running at port 1337");

app.use(express.static(path.join(__dirname, 'dist/public')));

// setup server
var server = app.listen(1337);
