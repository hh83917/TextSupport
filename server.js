var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var cors = require('cors');

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(cors());
app.use(bodyParser.json());

var fbRef = new Firebase('https://hh-textsupport.firebaseio.com/numbers');

// Twilio Credentials
var accountSid = 'AC8ac671c0cbedc0457c25b3440c643158';
var authToken = '1641bb58f87147799723cd01f936eac4';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

app.post('/support/messages/', function(req, res) {
  client.messages.create({
      to: req.body.to,
      from: "+18303556789",
      body: req.body.reply,
      is_support: true
  }, function(err, message) {
      if (err) {
        res.status(500).send('message not sent');
        console.log(message);
      } else {
        fbRef.child('/' + req.body.to).push(message);
        res.send('posted');
        res.status(200).end();
      }
  });
});

app.listen(9001);
