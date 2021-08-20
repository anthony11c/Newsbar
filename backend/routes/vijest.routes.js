module.exports = app => {
    const vijest = require("../controller/vijest.controller");
  
    const router = require("express").Router();
  
    // Create a new Vijest
    router.post("/", vijest.create);
  
    // Retrieve all vijest
    router.get("/", vijest.findAll);
  
    // Retrieve a single Vijest with id
    router.get("/:id", vijest.findOne);
  
    // Update a Vijest with id
    router.put("/:id", vijest.update);
  
    // Delete a Vijest with id
    router.delete("/:id", vijest.delete);

    // Create a new Vijest
    router.delete("/", vijest.deleteAll);
  
    app.use('/vijesti', router);
  };