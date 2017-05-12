var express = require('express');
var router = express.Router();
var dbMock = require('./server2mock.json');


var eventList = dbMock.eventList;
var userList = dbMock.userList;

router.use(function timeLog (req, res, next) {
   console.log('Routing mock at ', Date.now());
   next();
});

// Events

router.get('/events/', function(req, res) {

  var list = {
    data: eventList
  };

  list.data.forEach(function(item) {
    item['image-url'] = item.imageUrl;
    item['external-url'] = item.externalUrl;
  });
  res.status(200).json(list);

});

router.put('/events/:id', function (req, res) {

  var id = req.params.id;
  var data = req.body;
  data.imageUrl = data['image-url'];
  data.externalUrl = data['external-url'];

  var i = eventList.findIndex(x => x.id === data.id);
  if (i == -1) {
    res.status(400).json('not found');
  } else {
    eventList[i] =  {
      id: data.id,
      cssStyleId: data.cssStyleId,
      name:  data.name,
      date: data.date,
      imageUrl: data.imageUrl,
      externalUrl: data.externalUrl,
      longitude: data.longitude,
      latitude: data.latitude,
      active: data.active
    };
    res.status(200).json('ok');
  }
});

router.post('/events', function (req, res) {

  var data = req.body;
  data.imageUrl = data['image-url'];
  data.externalUrl = data['external-url'];

  var count = eventList.length;
  var id = 0;
  for (var i = 0; i < count; i++) {
    if (eventList[i].id > id) id = eventList[i].id;
  }

  eventList.push({
    id: id+1,
    cssStyleId: data.cssStyleId,
    name:  data.name,
    date: data.date,
    imageUrl: data.imageUrl,
    externalUrl: data.externalUrl,
    longitude: data.longitude,
    latitude: data.latitude,
    active: data.active
  });
  res.status(200).json('ok');

});

router.delete('/events/:id', function (req, res) {

  var id = req.params.id;

  var i = eventList.findIndex(x => x.id === id);
  eventList.splice(i, 1);
  res.status(200).json('ok');

});


// Users

router.get('/users', function(req, res) {

  console.log('get users');
  res.status(200).json({ data: userList });

});

router.delete('/users/:id', function (req, res) {

  console.log('delete user ' + req.params.id);
  var i = userList.findIndex(x => x.id === req.params.id);
  userList.splice(i, 1);
  res.status(200).json('ok');

});

router.post('/users', function (req, res) {

  var data = req.body;
  var count = userList.length;
  var id = 0;
  for (var i = 0; i < count; i++) {
    if (userList[i].id > id) id = userList[i].id;
  }
  userList.push({
    id: id+1,
    email: data.email,
    password: data.password,
    active: data.active
  });
  res.status(200).json('ok');

});

router.put('/users/:id', function (req, res) {

  var data = req.body;
  var i = userList.findIndex(x => x.id == req.params.id);
  if (i == -1) {
    res.status(400).json('not found');
  } else {
    userList[i] =  {
      id: data.id,
      email: data.email,
      password: data.password,
      active: data.active
    };
    res.status(200).json('ok');
  }
});

module.exports = router;