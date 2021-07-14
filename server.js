const { ClassGetter } = require('@angular/compiler/src/output/output_ast');
const express = require('express');
const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
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

    let users = User.find({}, function(err, users){

        if(err){
            console.log("Greska prilikom dohvata usera iz baze!")
            console.log(err);
        }

        else {
            console.log("Pronadeno je nesto!");
            //res.json({username: 'finaboi'});
            //res.json(users);
        }
    });
});











//Exportanje api funkcija 
module.exports = app;

// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});