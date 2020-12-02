const Post = require("../models/Post");

class PostController {
  async store(req, res) {
    const insertedPost = await Post.create(req.body);

    return res.status(200).json(insertedPost);
  }
}

module.exports = new PostController();
