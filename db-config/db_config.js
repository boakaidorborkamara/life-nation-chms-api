const { Sequelize, DataTypes } = require('sequelize');

// create an instance of sequelize 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'church-management-system.db'
});
 

// verify if database connection was successfully created 
(async ()=>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


// close database connection 
// sequelize.close()