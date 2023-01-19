const { Sequelize, DataTypes, DATE } = require('sequelize');

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


//people model 
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


// family roles model 
const FamilyRole = sequelize.define("family_roles", {
  name: DataTypes.TEXT
});


// families model 
const Family = sequelize.define("families", {
  name: DataTypes.TEXT,
  address1: DataTypes.TEXT,
  address2: DataTypes.TEXT,
  home_phone: DataTypes.TEXT,
  mobile_phone: DataTypes.TEXT,
  whatsapp_number: DataTypes.TEXT,
  email: DataTypes.TEXT,
  wedding_date: DataTypes.DATE
});


// group-types model 
const GroupType = sequelize.define("group_types", {
  name: DataTypes.TEXT
});


// groups model 
const Group = sequelize.define("groups", {
  name: DataTypes.TEXT,
  description: DataTypes.TEXT,
  status: DataTypes.BOOLEAN,
  // foreign key 
  group_type_id: DataTypes.TEXT
});


// group roles model 
const GroupRole = sequelize.define("group_roles", {
  name: DataTypes.TEXT,
  default_status: DataTypes.BOOLEAN,
  // foreign key 
  group_id: DataTypes.TEXT
});


// group event types model 
const EventType = sequelize.define("event_types", {
  name: DataTypes.TEXT,
  recurrence_pattern: DataTypes.TEXT,
  default_start_time: DataTypes.TEXT,
  attendance_count: DataTypes.TEXT,
});


// group events model 
const Event = sequelize.define("events", {
  title: DataTypes.TEXT,
  description: DataTypes.TEXT,
  total: DataTypes.NUMBER,
  number_of_members: DataTypes.NUMBER,
  number_of_visitors: DataTypes.NUMBER,
  attendance_notes: DataTypes.TEXT,
  event_sermon: DataTypes.TEXT,
  active: DataTypes.BOOLEAN
});


// event attendance model 
const EventAttendance = sequelize.define("event_attendance", {
  event_id: DataTypes.TEXT,
  person_id: DataTypes.TEXT
});


// sync all of the models with the database 
(async () => {
  await sequelize.sync({ force: true });
  // Code here
  console.log("People table successfully created.");
  console.log("Family Roles table successfully created");
  console.log("Families table successfully created");
  console.log("Group Types table successfully created");
  console.log("Group table successfully created");
  console.log("Group Roles table successfully created");
  console.log("Event Types table successfully created");
  console.log("Event table successfully created");
  console.log("Event Attendance Types table successfully created");






})();







// close database connection 
// sequelize.close()