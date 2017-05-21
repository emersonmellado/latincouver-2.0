var express = require('express')
var serveStatic = require('serve-static')
var compression = require('compression')
var port = process.env.PORT || 4000;
var domain = process.env.DOMAIN;

// Plinio for mock
var bodyParser = require('body-parser');
var mock = require('./server2mock');
//

function ensureDomain(req, res, next) {
  if (!domain || req.hostname === domain) {
    return next();
  };
  res.redirect('http://' + domain + req.url); // handle port numbers if you need non defaults
};

var app = express()
// Plinio for mock
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//
app.disabled('x-powered-by');
app.all('*', ensureDomain); // at top of routing calls
app.use(compression())

app.use(serveStatic(__dirname + '/src2', {
  'extensions': ['html']
}))

// Plinio for mock
app.use('/mock', mock);
//

port = 3000;
app.listen(port, function() {
  console.log('server running on localhost:' + port);
});
