const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');
const Product = require('./product');

class  Store extends Model {}

Store.init(
  {
    // Model attributes are defined here
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4
      },
    storename: {
     type: DataTypes.STRING,
     allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Store', // We need to choose the model name
    tableName: 'Stores'
  },
);

Store.hasMany(Product, {
    foreignKey: 'storeid',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
})

module.exports = Store;

