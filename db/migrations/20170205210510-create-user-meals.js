'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('UserMeals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      belongsTo: {
        type: Sequelize.INTEGER
      },
      ingredients: {
        type: Sequelize.STRING(255)
      },
      comments: {
        type: Sequelize.TEXT
      },
      totalCalories: {
        type: Sequelize.DECIMAL
      },
      totalProtein: {
        type: Sequelize.DECIMAL
      },
      totalFat: {
        type: Sequelize.DECIMAL
      },
      totalCarbs: {
        type: Sequelize.DECIMAL
      },
      totalFiber: {
        type: Sequelize.DECIMAL
      },
      totalSodium: {
        type: Sequelize.DECIMAL
      },
      whichMeal: {
        type: Sequelize.STRING(255)
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserMeals');
  }
};