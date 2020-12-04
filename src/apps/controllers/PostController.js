const Post = require("../models/Post");

class PostController {
  async store(req, res) {
    const insertedPost = await Post.create(req.body);

    const formattedPosts = {
      id: insertedPost.id,
      avatar: "https://cdn.quasar.dev/img/avatar.png",
      name: "Daniel",
      time: insertedPost.createdAt,
      text: insertedPost.text,
      url: insertedPost.picture,
      likes: 169,
      comments: 6,
      shareds: 4,
    };

    return res.status(200).json(formattedPosts);
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

    const formattedPosts = [];

    allPosts.forEach((element) => {
      formattedPosts.push({
        id: element.id,
        avatar: "https://cdn.quasar.dev/img/avatar.png",
        name: "Daniel",
        time: element.createdAt,
        text: element.text,
        url: element.picture,
        likes: 169,
        comments: 6,
        shareds: 4,
      });
    });

    return res.status(200).json(formattedPosts);
  }
}

module.exports = new PostController();
