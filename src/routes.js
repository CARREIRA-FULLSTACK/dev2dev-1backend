const { Router } = require("express");
const PostController = require("./apps/controllers/PostController");

const routes = new Router();

routes.get("/health", (req, res) => {
  res.send({ status: "Connect success!" });
});

routes.post("/post", PostController.store);

module.exports = routes;
