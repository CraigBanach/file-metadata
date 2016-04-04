'use strict';

var express = require('express');
var multer = require("multer");
var path = process.cwd();
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express();

app.get("/", function(req, res) {
	res.sendFile(path + "/index.html")
	res.end();
})

app.post("/api/readFile", upload.single("file"), function(req,res){
    res.json({"size": req.file.size + " bytes"})
})

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});