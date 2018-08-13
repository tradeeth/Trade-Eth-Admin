'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Tokens',
        'url',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: '',
        }
      ),

      queryInterface.addColumn(
        'Tokens',
        'description',
        {
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValue: '',
        }
      ),
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'Tokens',
        'url',
      ),

      queryInterface.removeColumn(
        'Tokens',
        'description',
      ),
    ];
  }
};
