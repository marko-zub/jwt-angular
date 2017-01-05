var express = require('express'),
  cors = require('cors'),
  faker = require('faker');

var app = express();

app.use(cors());

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

app.listen(9000, function() {
  console.log('app run');
});