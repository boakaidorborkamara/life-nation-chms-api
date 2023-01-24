const db_table = require('../models/db_tables');


// Handle creation of person on POST
const person_create = async (req, res)=>{

    const person = await db_table.People.create({
        gender: "male",
        title: "Mr",
        first_name: "James",
        middle_name: "Dorbor",
        last_name: "Gaye",
        suffix: "Jr.",
        date_of_birth: "January 15, 2022",
        phone_number: "0774333",
        whatsapp_number:"8844737",
        email: "boakaidkamara@gmail.com",
        home_address: "GSA Road",
        proffession: "Software Engineeer",
        means_of_income: "Self Employed",
        marital_status: "Single",
        number_of_children: 0,
        intrested_department: "Life Plug",
        educational_level: "High School Graduate"
    });

    res.status(201).send({code: 0, message: "person created"})
}


// Handle diplay of people on GET
const people_list = (req,res)=>{
    res.send("Sending people list");
}


//Handle display of specific person on GET
const person_details = (req, res)=>{
    res.send("Details for specific person")
}


// Handle edit of specific person details on PUT 
const person_edit = (req, res)=>{
    res.send("Edit person Details")
}


//Handle delete of specific person details on DELETE
const person_delete = (req, res)=>{
    res.send("delete person");
}


module.exports = {
    person_create,
    people_list,
    person_details,
    person_edit,
    person_delete
}