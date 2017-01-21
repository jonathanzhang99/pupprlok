var express = require("express");
var app = express();

function log(msg){
	console.log(msg);
}

app.get('/', function (req, res) {
	res.send("hello world");
});

app.listen(5000, function() {
	log("Server started on port 5000");
});