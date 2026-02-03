module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();

  // Rota para criar um novo usuário
  router.post("/", users.create);

  // Define a URL base: http://localhost:3000/api/users
  app.use("/api/users", router);
};
