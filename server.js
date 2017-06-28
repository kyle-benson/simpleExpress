var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/elements.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/elements.html'));
});
app.listen(8080);
console.log("Listening on port 8080");
