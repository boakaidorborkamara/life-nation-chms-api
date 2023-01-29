const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of groups on POST
const groups_create = async (req, res)=>{

    // data from frontend
    let new_group_details = req.body;
    console.log(new_group_details);

    const group = await db.Group.create({
        name: new_group_details.name,
        description: new_group_details.description,
        status: new_group_details.status
    });

    res.status(201).send({code: 201, message: "Group Added"});

}


// Handle diplay of groups on GET
const groups_list = async (req,res)=>{
    const groups = await db.Group.findAll();
    res.status(200).send({code: 200, groups});
}


//Handle display of specific group on GET
const groups_details = async (req, res)=>{

    // id of group detail you want to see 
    let group_id = req.params.id;

    
    const group = await db.Group.findByPk(group_id);
    // check if id is invalid 
    if (group === null) {

        // modify res obj 
        res_obj.code = 400;
        res_obj.message = "Not a valid Group";

        res.status(400).send(res_obj);

    } else {
        
        // modify res obj 
        res_obj.code = 200;
        res_obj.message = group;

        res.status(200).send(JSON.stringify(res_obj));
    }
}


// Handle edit of specific group details on PUT 
const groups_edit = async (req, res)=>{

    // id for person info we want to edit 
    let group_id = req.params.id;

    //new info for modification
    let new_info = req.body;
    console.log(new_info);


    await db.Group.update(new_info,{
        where:{
            id:family_id
        }
    });


    // modify request obj 
    res_obj.code = 200;
    res_obj.message = "Group modified"

    res.status(200).send(JSON.stringify(res_obj));
}


//Handle delete of specific group details on DELETE
const groups_delete = async (req, res)=>{
    
    // id for group info we want to edit 
    let group_id = req.params.id;

    await db.Group.destroy({
        where: {
            id: group_id
        }
    });

    // modify res_obj 
    res_obj.code = 204;
    res_obj.message = "Success, group deleted.";

    res.send(JSON.stringify(res_obj));
}


module.exports = {
    groups_create,
    groups_list,
    groups_details,
    groups_edit,
    groups_delete
}