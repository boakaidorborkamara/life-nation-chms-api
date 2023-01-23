const express = require("express");
const sequelize = require("./models/db_tables.js");
const app = express();
const PORT = process.env.PORT || 3000;


const people_routes = require('./routers/people-router');

app.use(people_routes);




app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`); 
})