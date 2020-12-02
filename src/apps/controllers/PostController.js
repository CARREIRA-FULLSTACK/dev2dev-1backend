const Post = require("../models/Post");

class PostController {
  async store(req, res) {
    console.log(req.file);

    const { filename, size } = req.file;

    return res.send({ image: `/uploads/${filename}`, size });
  }
}

module.exports = new PostController();
