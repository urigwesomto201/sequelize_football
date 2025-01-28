
const {v4: uuid} = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('footballclubs', [
      {
        id: uuid(),
        name: "man_utd",
        coach:" ruben_amorin",
        stadium:"old_trafford",
        ucl:3,
        topsix:false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuid(),
        name: "man_city",
        coach:" pep_guardiola",
        stadium:"eithad",
        ucl:3,
        topsix:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('footballclubs', null, {});
  },
};