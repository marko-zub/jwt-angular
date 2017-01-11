var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  jwt = require('jsonwebtoken'),
  faker = require('faker');

var app = express();

// Config
var config = require('./config');

// app.set('superSecret', config.secret);

app.use(cors());
app.use(bodyParser.json());

app.get('/users/random', function(req, res) {
  var user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    avatar: faker.image.avatar()
  }
  res.json(user);
});

// Hardocded user :)
var user = {
  email: 'test@test.com',
  password: 'test'
}

app.post('/user/login', authenticateUser, function(req, res) {
  // If user logged in send token
  var token = jwt.sign({
    token: user.email
  }, config.secret);
  res.send({
    token: token
  });
});

function authenticateUser(req, res, next) {
  var body = req.body;
  if (!body.email || !body.password) {
    res.status(400).end('Please provide login details');
  }
  if (body.email !== user.email || body.email !== user.password) {
    res.status(401).end('Wrong details');
  }
  next();
}

app.listen(9000, function() {
  console.log('app run');
});