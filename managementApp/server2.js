var express = require('express')
var serveStatic = require('serve-static')
var compression = require('compression')
var port = process.env.PORT || 4000;
var domain = process.env.DOMAIN;

function ensureDomain(req, res, next) {
  if (!domain || req.hostname === domain) {
    // OK, continue
    return next();
  };
  res.redirect('http://' + domain + req.url); // handle port numbers if you need non defaults
};


var app = express()
app.all('*', ensureDomain); // at top of routing calls
app.use(compression())

// Plinio: src -> src2
app.use(serveStatic(__dirname + '/src2', {
  'extensions': ['html']
}))

// Plinio: port = 3000
port = 3000;
app.listen(port, function() {
  console.log('server running on localhost:' + port);
});