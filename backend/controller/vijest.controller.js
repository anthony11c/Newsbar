const db = require("../models");
const Vijest = require("../models/vijest");

// Create and Save a new User
exports.create = (req, res) => {

  // Validate request
  /* if (!req.body.kategorija) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  // Create a Vijest
  const vijest = new Vijest({
    kategorija: 1,
    naslov: req.body.naslov,
    user: req.body.user,
    tekst_kratki: req.body.tekst_kratki,
    tekst_full: req.body.tekst_full
  });

  // Save Vijest in the database
  vijest
    .save(vijest)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vijest."
      });
    });
};

// Retrieve all Vijest from the database.
exports.findAll = (req, res) => {
    Vijest.find().then( result => {
        console.log(result); 
        res.send(result); 
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Vijesti."
      });
    });
};

// Find a single Vijest with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vijest.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Vijest with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving  Vijest with id=" + id });
      });
};

// Update a Vijest by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Vijest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Vijest with id=${id}. Maybe Vijest was not found!`
            });
          } else res.send({ message: "Vijest was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Vijest with id=" + id
          });
        });
};

// Delete a Vijest with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Vijest.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Vijest with id=${id}. Maybe Vijest was not found!`
          });
        } else {
          res.send({
            message: "Vijest was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vijest with id=" + id
        });
      });
};

// Delete all Vijesti from the database.
exports.deleteAll = (req, res) => {
  Vijest.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Vijesti were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all vijesti."
      });
    });
};