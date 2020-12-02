const Sequelize = require("sequelize");
const Post = require("../apps/models/Post");

const models = [Post];
const databaseConfig = require("../configs/db");

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
