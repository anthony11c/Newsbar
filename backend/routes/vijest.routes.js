module.exports = app => {
    const vijest = require("../controller/vijest.controller");
  
    const router = require("express").Router();
  
    // Create a new User
    router.post("/", vijest.create);
  
    // Retrieve all vijest
    router.get("/", vijest.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", vijest.findOne);
  
    // Update a User with id
    router.put("/:id", vijest.update);
  
    // Delete a User with id
    router.delete("/:id", vijest.delete);
  
    app.use('/vijesti', router);
  };