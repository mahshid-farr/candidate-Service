//load express
const express = require('express')
const app = express()

const port = process.env.PORT || 8300;

//load body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//load mongoose
const mongoose = require('mongoose')

//load models
const Candidate = require('./model/candidate');
const Badge = require('./model/badgeType');
const DataPoint = require('./model/dataPoint')
//database connection
mongoose.connect("mongodb+srv://AcornPurpleSquirrel:c5g83kCRgzjBKqNE@acorn.bzwjn.mongodb.net/candidatesService", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Database is connected!")
});

//create function for candidate
app.post('/addCandidate', (req, res) => {
    //create a new candidate
    var candidate = new Candidate(req.body)
    candidate.save().then(() => {
      console.log("One new candidate is created successfully");
    }).catch((err) => {
      if (err) {
        throw err
      }
    })
    res.send("One new candidate is created successfully")
  });
  
  //read function to get all candidate
  app.get('/getAllCandidates', (req, res)=>{
    Candidate.find().then((candidates)=>{
      res.json(candidates)
    }).catch((err)=>{
     if(err){
       throw err
     }
    })
  });

//create function for badges
app.post('/addBadge', (req, res) => {
    //create a new badge
    var badge = new Badge(req.body)
    badge.save().then(() => {
      console.log("One new badge is created successfully");
    }).catch((err) => {
      if (err) {
        throw err
      }
    })
    res.send("One new badge is created successfully")
  });

   //read function to get all badges
   app.get('/getAllBadges', (req, res)=>{
    Badge.find().then((badges)=>{
      res.json(badges)
    }).catch((err)=>{
     if(err){
       throw err
     }
    })
  });

//create function for datapoints
app.post('/addDataPoint', (req, res) => {
    //create a new datapoint
    var dataPoint = new DataPoint(req.body)
    dataPoint.save().then(() => {
      console.log("One new datapoint is created successfully");
    }).catch((err) => {
      if (err) {
        throw err
      }
    })
    res.send("One new datapoint is created successfully")
  });

  //read function to get all datapoints
  app.get('/getAllDataPoints', (req, res)=>{
    DataPoint.find().then((dataPoints)=>{
      res.json(dataPoints)
    }).catch((err)=>{
     if(err){
       throw err
     }
    })
  });

  app.listen(8300, () => {
    console.log("Server started on: " + port)
  });