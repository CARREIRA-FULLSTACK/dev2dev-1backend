const Post = require("../models/Post");

class PostController {
  async store(req, res) {
    console.log("POST CONTROLLER");
  }
}

module.exports = new PostController();
