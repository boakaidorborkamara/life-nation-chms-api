const { Sequelize, DataTypes } = require('sequelize');

// create an instance of sequelize 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'church-management-system.db'
});


const People = sequelize.define("people", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

// create actual table in the database 
(async () => {
  await sequelize.sync({ force: true });
  // Code here
  console.log("People table successfully created.")
})();



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