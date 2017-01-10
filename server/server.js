var express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  jwt = require('jsonwebtoken'),
  faker = require('faker');

var app = express();

// Config
var config = require('./config');

app.set('superSecret', config.secret);

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

var user = {
  username: 'test',
  password: 'test'
}

app.post('/user/login', authenticateUser, function(req, res) {
  console.log(req, res);
  res.send('User loggedin');
});

function authenticateUser(req, res, next) {
  var body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end('Please provide login details');
  }
  if (body.username !== user.username || body.username !== user.password) {
    res.status(401).end('Wrong details');
  }
  next();
}

app.listen(9000, function() {
  console.log('app run');
});