module.exports = app => {
    const kategorija = require("../controller/kategorija.controller");
  
    const router = require("express").Router();
  
    // Create a new User
    router.post("/", kategorija.create);
  
    // Retrieve all kategorija
    router.get("/", kategorija.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", kategorija.findOne);
  
    // Update a User with id
    router.put("/:id", kategorija.update);
  
    // Delete a User with id
    router.delete("/:id", kategorija.delete);
  
    app.use('/kategorija', router);
  };