// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = 5000;
// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// spin up server
app.listen(port, function(){
  console.log('listening on port: ', port);
})
// routes


// home base
app.get('/', function(req, res){
  console.log('home base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

// do math
app.post('/math', function(req,res){
  // recieve the object from Client
  console.log('in math post', req.body);
  //determine the operator
  if(req.body.type == 'add'){
    console.log('adding');
    var answer = Number(req.body.x) + Number(req.body.y);
  }
  else if (req.body.type == 'subtract'){
    console.log('subtracting');
    answer = Number(req.body.x) - Number(req.body.y);
    console.log(answer);
  }
  else if (req.body.type == 'multiply'){
    console.log('multipling');
    answer = Number(req.body.x) * Number(req.body.y);
    console.log(answer);
  }
  else if (req.body.type == 'divide'){
    console.log('dividing');
    answer = Number(req.body.x) / Number(req.body.y);
    console.log(answer);
  }
  //do the correct math
  // return the answer in an object
  var objectToSend = {
    answer: answer
  };
  res.send(objectToSend);
}); // end do math
