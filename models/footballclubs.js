const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class  footballclubs extends Model {}

footballclubs.init(
  {
    // Model attributes are defined here
    name: {
     type: DataTypes.STRING,
     allowNull: false
    },
    coach: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ucl: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stadium: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topsix: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'footballclubs', // We need to choose the model name
    tableName: 'footballclubs'
  },
);

module.exports = footballclubs

