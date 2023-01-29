const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of group-type on POST
const group_type_create = async (req, res)=>{

    // data from frontend
    let new_group_type_details = req.body;
    console.log(new_group_type_details);

    const group_type = await db.Family.create({
        name: new_group_type_details.name
    });

    res.status(201).send({code: 201, message: "Family Added"});

}


// Handle diplay of families on GET
const families_list = async (req,res)=>{
    const families = await db.Family.findAll();
    res.status(200).send({code: 200, families});
}


//Handle display of specific family on GET
const family_details = async (req, res)=>{

    // id of family detail you want to see 
    let family_id = req.params.id;

    
    const family = await db.Family.findByPk(family_id);
    // check if id is invalid 
    if (family === null) {

        // modify res obj 
        res_obj.code = 400;
        res_obj.message = "Not a valid family";

        res.status(400).send(res_obj);

    } else {
        
        // modify res obj 
        res_obj.code = 200;
        res_obj.message = family;

        res.status(200).send(JSON.stringify(res_obj));
    }
}


// Handle edit of specific person details on PUT 
const family_edit = async (req, res)=>{

    // id for person info we want to edit 
    let family_id = req.params.id;

    //new info for modification
    let new_info = req.body;
    console.log(new_info);


    await db.Family.update(new_info,{
        where:{
            id:family_id
        }
    });


    // modify request obj 
    res_obj.code = 200;
    res_obj.message = "Family modified"

    res.status(200).send(JSON.stringify(res_obj));
}


//Handle delete of specific family details on DELETE
const family_delete = async (req, res)=>{
    
    // id for person info we want to edit 
    let family_id = req.params.id;

    await db.Family.destroy({
        where: {
            id: family_id
        }
    });

    // modify res_obj 
    res_obj.code = 204;
    res_obj.message = "Success, family deleted.";

    res.send(JSON.stringify(res_obj));
}


module.exports = {
    family_create,
    families_list,
    family_details,
    family_edit,
    family_delete
}