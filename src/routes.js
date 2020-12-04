const { Router } = require("express");
const PostController = require("./apps/controllers/PostController");
const multer = require("multer");
const { resolve } = require("path");

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

routes.post("/upload", upload.single("image"), PostController.upload);

routes.get("/uploads/:img", (req, res) => {
  const { img } = req.params;
  const path = resolve("uploads", img);

  res.sendFile(path);
});

module.exports = routes;
