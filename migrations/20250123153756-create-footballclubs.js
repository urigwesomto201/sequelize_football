'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('footballclubs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      coach: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ucl: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stadium: {
        type: Sequelize.STRING,
        allowNull: false
      },
      topsix: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('footballclubs');
  }
};