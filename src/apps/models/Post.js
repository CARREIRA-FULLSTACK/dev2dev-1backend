const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        text: Sequelize.STRING,
        picture: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Post;
