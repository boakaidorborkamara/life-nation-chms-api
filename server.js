const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./models/db_tables.js");


const app = express();


// create application/json parser
const  jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });


// define port 
const PORT = process.env.PORT || 3000;


// ROUTES 
const index_routes = require('./routers/index-router');
const people_routes = require('./routers/people-router');


app.use(index_routes);
app.use(people_routes);





app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`); 
})