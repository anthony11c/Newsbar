module.exports = app => {
    const role = require("../controller/role.controller");
  
    const router = require("express").Router();
  
    // Create a new User
    router.post("/", role.create);
  
    // Retrieve all role
    router.get("/", role.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", role.findOne);
  
    // Update a User with id
    router.put("/:id", role.update);
  
    // Delete a User with id
    router.delete("/:id", role.delete);
  
    app.use('/role', router);
  };