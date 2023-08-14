var express = require('express');
var http= require('https');
var path = require('path');
var nodemailer= require('nodemailer');

var app = express();
var server= http.Server(app);
var port= 5500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./dist/index.html")));

//routing
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./dist/index.html"))
})

app.post("/send_email", function(req, res){
    var from = req.cont-forms.from;
    var to= req.cont-forms.to;
    var subject= req.cont-forms.subject;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'singh.vaibhav.0106@gmail.com',
            pass: ''
        }
    })
})

//initialise web server
server.listen(port, function(){
    console.log("Starting server on port: " + port)
})