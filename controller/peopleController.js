const { Sequelize, DataTypes, DATE } = require('sequelize');
const db_tables = require('../models/db_tables');

const getPeople = ()=>{
    const people = People.findAll();
}