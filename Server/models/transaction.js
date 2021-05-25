"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      transaction.belongsTo(models.user, {
        as: "user",
        foreignKey: {
          name: "userid",
        },
      });
      transaction.belongsTo(models.film, {
        as: "film",
        foreignKey: {
          name: "filmid",
        },
      });
    }
  }
  transaction.init(
    {
      status: DataTypes.STRING,
      accountNumber: DataTypes.INTEGER,
      transferProof: DataTypes.STRING,
      orderDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
