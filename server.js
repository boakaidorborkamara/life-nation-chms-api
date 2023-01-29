const express = require("express");
const sequelize = require("./models/db_tables.js");


const app = express();


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// define port 
const PORT = process.env.PORT || 3000;


// ROUTES 
const index_routes = require('./routers/index-router');
const people_routes = require('./routers/people-router');
const family_routes = require('./routers/family-router');
const person_categories_routes = require('./routers/person-categories-router');
const groups_routes = require('./routers/groups-router');


app.use(index_routes);
app.use(people_routes);
app.use(family_routes);
app.use(person_categories_routes);
app.use(groups_routes);





app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`); 
})