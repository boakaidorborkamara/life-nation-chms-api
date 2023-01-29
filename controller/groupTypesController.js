const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of group-type on POST
const group_type_create = async (req, res)=>{

    // data from frontend
    let new_group_type_details = req.body;
    console.log(new_group_type_details);

    const group_type = await db.GroupType.create({
        name: new_group_type_details.name
    });

    res.status(201).send({code: 201, message: "Group Added"});

}


// Handle diplay of group-types on GET
const group_types_list = async (req,res)=>{
    const group_types = await db.GroupType.findAll();
    res.status(200).send({code: 200, group_types});
}


//Handle display of specific group-type on GET



// Handle edit of specific group-type details on PUT 
const group_type_edit = async (req, res)=>{

    // id for group info we want to edit 
    let group_type_id = req.params.id;

    //new info for modification
    let new_info = req.body;
    console.log(new_info);


    await db.GroupType.update(new_info,{
        where:{
            id:group_type_id
        }
    });


    // modify request obj 
    res_obj.code = 200;
    res_obj.message = "Group Type modified"

    res.status(200).send(JSON.stringify(res_obj));
}


//Handle delete of specific group-type details on DELETE
const group_type_delete = async (req, res)=>{
    
    // id for group-type info we want to edit 
    let group_type_id = req.params.id;

    await db.GroupType.destroy({
        where: {
            id: group_type_id
        }
    });

    // modify res_obj 
    res_obj.code = 204;
    res_obj.message = "Success, group type deleted.";

    res.send(JSON.stringify(res_obj));
}


module.exports = {
    group_type_create,
    group_types_list,
    group_type_edit,
    group_type_delete
}