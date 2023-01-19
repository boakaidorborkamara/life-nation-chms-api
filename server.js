const express = require("express");
const sequelize = require("./db-config/db_config.js");
const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`); 
})