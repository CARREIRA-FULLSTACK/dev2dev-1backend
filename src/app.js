const express = require("express");
const routes = require("./routes");
require("./database/index");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use("/uploads", express.static("uploads"));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
