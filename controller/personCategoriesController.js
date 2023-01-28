const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of person on POST
const person_category_create = async (req, res)=>{

    // data from frontend
    let new_category = req.body;
    console.log(new_category);

    const person_category = await db.PersonCategory.create({
        name: new_category.name
    });


    res.status(201).send({code: 201, message: "Category Added"});
}


// Handle diplay of people on GET
const person_category_list = async (req,res)=>{

    const person_category = await db.PersonCategory.findAll();
    res.status(200).send({code: 200, person_category});

}


// Handle edit of specific person details on PUT 
const person_category_edit = async (req, res)=>{

    // id for person info we want to edit 
    let person_category_id = req.params.id;

    //new info for modification
    let new_info = req.body;
    console.log(new_info);


    await db.PersonCategory.update(new_info,{
        where:{
            id:person_category_id
        }
    });


    // modify request obj 
    res_obj.code = 200;
    res_obj.message = "Category modified"

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