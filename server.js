var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Juijui del amorrrr y la felicidaaaaad!");
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});