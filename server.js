const express = require('express');
const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vijestidb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

//import model of data
const User = require('./models/User');

// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log("There is a problem with connecting to the database!");
});




app.get('/', (req, res) =>{
    res.send('<h2>Hello from Express.js server!!</h2>');
});

app.get('/sport', (req,res) => {
    res.send('<h2>Svi članci vezani za sport!</h2>');
});

app.get('/zabava', (req,res) => {
    res.send('<h2>Svi članci vezani za zabavu!</h2>');
});

app.get('/politika', (req,res) => {
    res.send('<h2>Svi članci vezani za politiku!</h2>');
});

//get all users
app.get('/users', function (req, res) {

    User.find().then( result => {
        console.log(result); 
        res.send(result); 
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
});

//Exportanje api funkcija 
module.exports = app;

// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});