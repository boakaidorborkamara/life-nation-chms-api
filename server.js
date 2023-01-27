const express = require("express");
const sequelize = require("./models/db_tables.js");
const app = express();
const PORT = process.env.PORT || 3000;


const index_routes = require('./routers/index-router');
const people_routes = require('./routers/people-router');


app.use(index_routes);
app.use(people_routes);





app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`); 
})