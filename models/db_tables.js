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
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  title:{
    type: DataTypes.TEXT,
    allowNull:true
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  middle_name:{
    type: DataTypes.TEXT,
    allowNull: true
  },
  last_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  suffix: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date_of_birth: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  whatsapp_number: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  profile_image: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },
  home_address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  proffession: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  means_of_income: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  marital_status: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  number_of_children: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
    allowNull: false
  },
  interested_department: {
    type: DataTypes.TEXT,
    defaultValue: 'None',
    allowNull: false
  },
  educational_level: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}); 


// families model 
const Family = sequelize.define("families", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address1: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  address2: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  home_phone: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  mobile_phone: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  wedding_date: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});


// family roles model 
const FamilyRole = sequelize.define("family_roles", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});


// membership category model 
const MembershipCategory = sequelize.define("membership_categories", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4, 
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});


// groups model 
const Group = sequelize.define("groups", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 'active'
  },
  // foreign key 
  group_type_id: DataTypes.TEXT
});


// group-types model 
const GroupType = sequelize.define("group_types", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});


// group roles model 
const GroupRole = sequelize.define("group_roles", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  select_as_default: {
    type: DataTypes.BOOLEAN
  },
  // foreign key 
  // group_id: DataTypes.TEXT
});


// event types model 
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


// Associations 
FamilyRole.hasOne(People); //create familyRoleId foreign key in People table with one to one relationship
People.belongsTo(FamilyRole); 

Family.hasOne(People); //create FamilyId foreign key in People table with one to one relationship
People.belongsTo(Family);

MembershipCategory.hasOne(People); //create MembershipCategoryId foreigh key in People table with on to one relationsip
People.belongsTo(MembershipCategory);

GroupType.hasOne(Group); //create GroupTypeId foreign in Group table with one to one relationship
Group.belongsTo(GroupType);

Group.hasMany(GroupRole); //create a one to many relationship between Group and GroupRole with foreign key stored in Group Role
GroupRole.belongsTo(Group);


// sync all of the models with the database 
(async () => {
  await sequelize.sync({ force: false });
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




module.exports = {
  People
}


// close database connection 
// sequelize.close()

