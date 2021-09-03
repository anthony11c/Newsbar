const db = require("../models");
const Kategorija = require("../models/Kategorija");

// Create and Save a new Kategorija
exports.create = (req, res) => {

  // Validate request
  if (!req.body.naziv_kategorije) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Kategorija
  const kategorija = new Kategorija({
    _id: req.body._id,
    naziv_kategorije: req.body.naziv_kategorije
  });

  // Save Kategorija in the database
  kategorija
    .save(kategorija)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kategorija."
      });
    });
};

// Retrieve all Kategorija from the database.
exports.findAll = (req, res) => {
    Kategorija.find().then( result => {
        console.log(result); 
        res.send(result); 
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Kategorije."
      });
    });
};

// Find a single Kategorija with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Kategorija.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Kategorija with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving  Kategorija with id=" + id });
      });
};

// Update a Kategorija by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Kategorija.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Kategorija with id=${id}. Maybe Kategorija was not found!`
            });
          } else res.send({ message: "Kategorija was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Kategorija with id=" + id
          });
        });
};

// Delete a Kategorija with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Kategorija.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Kategorija with id=${id}. Maybe Kategorija was not found!`
          });
        } else {
          res.send({
            message: "Kategorija was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Kategorija with id=" + id
        });
      });
};