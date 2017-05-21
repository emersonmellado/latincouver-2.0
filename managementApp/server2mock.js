var express = require('express');
var router = express.Router();
var dbMock = require('./server2mock.json');

var eventList = dbMock.eventList;
var eventItem = JSON.parse(JSON.stringify(dbMock.eventList[0]));
var userList = dbMock.userList;
var userItem = JSON.parse(JSON.stringify(dbMock.userList[0]));
var plazaList = dbMock.plazaList;
var plazaItem = JSON.parse(JSON.stringify(dbMock.plazaList[0]));

router.use(function timeLog (req, res, next) {
   console.log('Routing mock at ', Date.now());
   next();
});

router.get('/:table', function(req, res) {

  var table = req.params.table;
  var list;
  if (table == 'events') {
    list = eventList;
    list.forEach(function(item) {
      item['image-url'] = item.imageUrl;
      item['external-url'] = item.externalUrl;
    });
  } else if(table == 'plazas') {
    list = plazaList;
  } else if(table == 'users') {
    list = userList;
  } else {
    res.status(400).json('no table');
  };

  console.log('get ' + table);
  res.status(200).json({ data: list });

});

router.post('/:table', function (req, res) {

  var table = req.params.table;
  var list;
  var item;
  var data = req.body;

  if (table == 'events') {
    list = eventList;
    item = eventItem;
    data.imageUrl = data['image-url'];
    data.externalUrl = data['external-url'];
  } else if(table == 'plazas') {
    list = plazaList;
    item = plazaItem;
  } else if(table == 'users') {
    list = userList;
    item = userItem;
  } else {
    res.status(400).json('no table');
  };
  var id = req.params.id;
  console.log('post. ' + table);

  var count = list.length;
  var id = 0;
  for (var i = 0; i < count; i++) {
    if (list[i].id > id) id = list[i].id;
  }
  data.id = id + 1;

  for(key in item) {
    if (data[key] != undefined) item[key] = data[key]; else item[key] = null;
  };
  list.push(item);
  res.status(200).json('ok');

});

router.put('/:table/:id', function (req, res) {

  var table = req.params.table;
  var list;
  var data = req.body;

  if (table == 'events') {
    list = eventList;
    data.imageUrl = data['image-url'];
    data.externalUrl = data['external-url'];
  } else if(table == 'plazas') {
    list = plazaList;
  } else if(table == 'users') {
    list = userList;
  } else {
    res.status(400).json('no table');
  };
  var id = req.params.id;
  console.log('put ' + table);

  var i = list.findIndex(x => x.id === data.id);
  if (i == -1) {
    res.status(400).json('not found');
  } else {
    for(key in list[i]) {
      if (data[key] != undefined) list[i][key] = data[key]; else list[i][key] = null;
    }
    res.status(200).json('ok');
  };
});

router.delete('/:table/:id', function (req, res) {

  var table = req.params.table;
  var list;
  if (table == 'events') {
    list = eventList;
  } else if(table == 'plazas') {
    list = plazaList;
  } else if(table == 'users') {
    list = userList;
  } else {
    res.status(400).json('no table');
  };
  var id = req.params.id;

  console.log('delete ' + table +' ' + id);
  var i = list.findIndex(x => x.id === id);
  list.splice(i, 1);
  res.status(200).json('ok');

});

module.exports = router;