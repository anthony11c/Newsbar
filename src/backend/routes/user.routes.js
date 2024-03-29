module.exports = app => {
    const users = require("../controller/user.controller");
    const { authJwt } = require("../middlewares");
    const controller = require("../controller/user.controller");
  
    const router = require("express").Router();
  
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    // Create a new User
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
  
    // Update a User with id
    router.put("/:id", users.update);
  
    // Delete a User with id
    router.delete("/:id", users.delete);
  
    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
  
    app.get(
      "/api/test/admin",
      [authJwt.verifyToken, authJwt.isAdmin],
      controller.adminBoard
    );

    app.use('/users', router);
  };