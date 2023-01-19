const express = require("express");
const sequelize = require("./models/db_tables.js");
const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`); 
})