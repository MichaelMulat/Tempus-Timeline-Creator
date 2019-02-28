'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Categories', [
     {
      category: 'Fiction', createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'Non-Fiction', createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'Scientific', createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'Historical', createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      category: 'Other', createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Categories', null, {});
  }
};
