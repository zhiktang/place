var bodyParser = require('body-parser');
var express = require('express');
const fs = require('fs');
var app = express();
var date = new Date();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tiles = [];

fs.readFile('count.txt', 'utf8', function(err, data) {
    if (err) throw err;
    var lines = data.split('\n');
    for (var i = 0; i < lines.length; i++) {
        tiles[i] = lines[i]
    }
}
);

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-headers", "Content-Type");
    next();
}
);

app.post('/click', function(req, res) {
    i = req.body.i;
    j = req.body.j;
    console.log(i,j);

}
);