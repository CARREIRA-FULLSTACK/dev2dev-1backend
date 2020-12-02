const { Router } = require("express");
const PostController = require("./apps/controllers/PostController");

const multer = require("multer");

const { uuid } = require("uuidv4");

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename(req, file, callback) {
      const fileName = `${uuid()}-${file.originalname}`;

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
