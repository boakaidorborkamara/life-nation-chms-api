const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of person on POST
const person_create = async (req, res)=>{

    const person = await db.People.create({
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

    res.status(201).send({code: 201, message: "person created"})
}


// Handle diplay of people on GET
const people_list = async (req,res)=>{

    const people = await db.People.findAll();
    res.status(200).send({code: 200, people:people});

}


//Handle display of specific person on GET
const person_details = async (req, res)=>{
    
    // id of person's detail you want to see 
    let person_id = req.params.id;

    // check if id is valid 
    const person = await db.People.findByPk(person_id);
    if (person === null) {

        // modify res obj 
        res_obj.code = 400;
        res_obj.message = "Not a valid person";

        res.status(400).send(res_obj);

    } else {
        
        // modify res obj 
        res_obj.code = 200;
        res_obj.message = person;

        res.status(200).send(JSON.stringify(res_obj));
    }

    
}


// Handle edit of specific person details on PUT 
const person_edit = async (req, res)=>{

    // id for person info we want to edit 
    let person_id = req.params.id;


    await db.People.update({first_name: "Boakai"},{
        where:{
            id:person_id
        }
    });


    // modify request obj 
    res_obj.code = 200;
    res_obj.message = "User modified"

    res.status(200).send(JSON.stringify(res_obj));

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