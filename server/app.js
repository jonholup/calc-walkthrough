// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 5000;
// uses
app.use(express.static('/public'));

// spin up server
app.listen(port, function(){
  console.log('listening on port: ', port);
})
// routes


// home base
app.get('/', function(req, res){
  console.log('home base hit');
});
