
const { Sequelize }= require('sequelize')


//create an new instance for sequenlize
const sequelize = new Sequelize('sequelize_part2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' 
});
module.exports = sequelize;