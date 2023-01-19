const { Sequelize, DataTypes } = require('sequelize');

// create an instance of sequelize 
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'church-management-system.db'
});


// define people model 
const People = sequelize.define("people", {
  gender: DataTypes.TEXT,
  title: DataTypes.TEXT,
  first_name: DataTypes.TEXT,
  middle_name: DataTypes.TEXT,
  last_name: DataTypes.TEXT,
  suffix: DataTypes.TEXT,
  date_of_birth: DataTypes.TEXT,
  phone_number: DataTypes.TEXT,
  whatsapp_number: DataTypes.TEXT,
  email: DataTypes.TEXT,
  profile_image: DataTypes.TEXT,
  home_address: DataTypes.TEXT,
  proffession: DataTypes.TEXT,
  means_of_income: DataTypes.TEXT,
  marital_status: DataTypes.TEXT,
  number_of_children: DataTypes.INTEGER,
  interested_department: DataTypes.TEXT,
  // foreign key >>>>>>>>>>>>>>>>>>>>>>>>>>>>
  family_role_id: DataTypes.TEXT,
  family_id: DataTypes.TEXT,
  classification_id: DataTypes.TEXT,
  educational_level_id: DataTypes.TEXT
});
 
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