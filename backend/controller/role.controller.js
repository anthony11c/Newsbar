const db = require("../models");
const Rola = require("../models/role");

// Create and Save a new Role
exports.create = (req, res) => {

  // Validate request
  if (!req.body.role_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Rola
  const rola = new Rola({
    _id: req.body._id,
    role_name: req.body.role_name
  });

  // Save Rola in the database
  rola
    .save(rola)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Role."
      });
    });
};

// Retrieve all Rola from the database.
exports.findAll = (req, res) => {
    Rola.find().then( result => {
        console.log(result); 
        res.send(result); 
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving roles."
      });
    });
};

// Find a single Rola with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Rola.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Role with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving  Role with id=" + id });
      });
};

// Update a Rola by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Rola.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Rola with id=${id}. Maybe Rola was not found!`
            });
          } else res.send({ message: "Rola was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Rola with id=" + id
          });
        });
};

// Delete a Rola with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Rola.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Rola with id=${id}. Maybe Rola was not found!`
          });
        } else {
          res.send({
            message: "Rola was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Rola with id=" + id
        });
      });
};