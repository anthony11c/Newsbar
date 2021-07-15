const db = require("../models");
const Vijest = require("../models/vijest");

// Create and Save a new User
exports.create = (req, res) => {

  // Validate request
  if (!req.body.kategorija) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const user = new User({
    _id: req.body._id,
    kategorija: req.body.kategorija,
    naslov: req.body.naslov,
    user: req.body.user,
    tekst_kratki: req.body.tekst_kratki,
    tekst_full: req.body.tekst_full
  });

  // Save Tutorial in the database
  Vijest
    .save(Vijest)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Vijest.find().then( result => {
        console.log(result); 
        res.send(result); 
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vijest.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving  User with id=" + id });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};