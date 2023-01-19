'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'userId', {
      type: Sequelize.INTEGER,

      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
      
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'userId')
  }
};