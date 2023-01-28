const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of person on POST
const person_create = async (req, res)=>{

    let new_person_details = req.body;
    console.log(new_person_details);

    const person = await db.People.create({
        gender: new_person_details.gender,
        title: new_person_details.title,
        first_name: new_person_details.first_name,
        middle_name: new_person_details.middle_name,
        last_name: new_person_details.last_name,
        suffix: new_person_details.suffix,
        date_of_birth: new_person_details.date_of_birth,
        phone_number: new_person_details.phone_number,
        whatsapp_number:new_person_details.whatsapp_number,
        email: new_person_details.email,
        home_address: new_person_details.home_address,
        proffession: new_person_details.proffession,
        means_of_income: new_person_details.means_of_income,
        marital_status: new_person_details.marital_status,
        number_of_children: new_person_details.number_of_children,
        intrested_department: new_person_details.intrested_department,
        educational_level: new_person_details.educational_level
    });


    res.status(201).send({code: 201, message: "person created"});
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
const person_delete = async (req, res)=>{

    // id for person info we want to edit 
    let person_id = req.params.id;

    await db.People.destroy({
        where: {
            id: person_id
        }
    });

    // modify res_obj 
    res_obj.code = 204;
    res_obj.message = "deleted";

    res.send(JSON.stringify(res_obj));

}


module.exports = {
    person_create,
    people_list,
    person_details,
    person_edit,
    person_delete
}