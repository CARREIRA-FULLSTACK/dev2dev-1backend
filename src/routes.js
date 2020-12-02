const { Router } = require("express");
const PostController = require("./apps/controllers/PostController");

const multer = require("multer");

const { v4 } = require("uuid");

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename(req, file, callback) {
      const fileName = `${v4()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
});

const routes = new Router();

routes.get("/health", (req, res) => {
  res.send({ status: "Connect success!" });
});

routes.post("/post", upload.single("avatar"), PostController.store);

module.exports = routes;
