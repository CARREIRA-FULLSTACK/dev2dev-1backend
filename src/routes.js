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

routes.post("/post", PostController.store);

routes.post("/avatar", upload.single("avatar"), function (req, res) {
  const { filename, size } = req.file;

  return res.send({ image: `/uploads/${filename}`, size });
});

module.exports = routes;
