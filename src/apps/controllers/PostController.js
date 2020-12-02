const Post = require("../models/Post");

class PostController {
  async store(req, res) {
    const insertedPost = await Post.create(req.body);

    return res.status(200).json(insertedPost);
  }

  async upload(req, res) {
    const { filename } = req.file;

    return res.send({ image: `uploads/${filename}` });
  }

  async getPosts(req, res) {
    const allPosts = await Post.findAll();

    if (!allPosts) {
      return res.send({ message: "Posts not found" });
    }

    return res.status(200).json(allPosts);
  }
}

module.exports = new PostController();
