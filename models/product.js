const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class  Product extends Model {}

Product.init(
  {

    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4
    },
    productname: {
     type: DataTypes.STRING,
     allowNull: false
    },
    productquantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productamount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // storeid: {
    //   type: DataTypes.UUID,
    //   allowNull:false,
    //   references:{
    //    model: 'stores',
    //    key: 'id'
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE'
    //      },
  
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product', // We need to choose the model name
    tableName: 'Products'
  },
);

module.exports = Product

