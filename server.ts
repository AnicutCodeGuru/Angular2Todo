const express = require('express')
const bodyParser = require('body-parser')
const MongoDB = require('mongodb');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const MongoClient = MongoDB.MongoClient;
var connection = null;

MongoClient.connect('mongodb://localhost:27017/horizon', function (err, db) {
  if (err) {
    throw err
  } else {
    connection = db;
  }
});



// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/todoList', function (req, res) {
  connection.collection('tasks').find().toArray(function (err, result) {
    if (err) {
      throw err
    } else {
      res.send(result);
    }
  });
});

app.post('/todoCreate', function (req, res) {
  connection.collection('tasks').insert({ taskName: req.body.taskName, taskStatus: req.body.taskStatus });
  res.send({ msg: "Record created" });
});

app.post('/todoDelete', function (req, res) {
  connection.collection('tasks').remove({ _id: MongoDB.ObjectId(req.body._id) }, function (err, result) {
    if (err) {
      throw err
    } else {
      res.send({ msg: "Record  Deleted..." });
    }
  });
});


app.post('/todoUpdate', function (req, res) {

  console.log(req.body._id);

  connection.collection('tasks').update({ _id: MongoDB.ObjectId(req.body._id) }, { $set: { taskStatus: req.body.taskStatus } }, function (err, result) {
    if (err) {
      throw err
    } else {
      res.send({ msg: "Record  Updated..." });
    }

  });


});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
});
