const { Router } = require("express");
const PostController = require("./apps/controllers/PostController");
const multer = require("multer");

const { v4 } = require("uuid");

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename(req, file, callback) {
      const filename = `${v4()}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
});

const routes = new Router();

routes.get("/health", (req, res) => {
  res.send({ status: "Connect success!" });
});

routes.post("/post", PostController.store);

routes.get("/post", PostController.getPosts);

routes.put("/upload", upload.single("image"), PostController.upload);

module.exports = routes;
