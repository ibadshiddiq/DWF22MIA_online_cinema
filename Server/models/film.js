"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      film.hasMany(models.transaction, {
        as: "transaction",
        foreignKey: {
          name: "filmid",
        },
      });
      film.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userid",
        },
      });
      film.belongsTo(models.category, {
        as: "category",
        foreignKey: {
          name: "categoryid",
        },
      });
    }
  }
  film.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      filmURL: DataTypes.STRING,
      description: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "film",
    }
  );
  return film;
};
