var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ps');

var db = mongoose.connection;

db.on('error', function (err) {
  console.error('connection error:', err.message);
});

db.once('open', function callback () {
  console.info("Connected to DB!");
});
