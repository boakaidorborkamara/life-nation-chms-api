const db = require('../models/db_tables');


let res_obj = {code: 0, message: "Ok"};


// Handle creation of family on POST
const family_create = async (req, res)=>{

    // data from frontend
    let new_family_details = req.body;
    console.log(new_family_details);

    const family = await db.Family.create({
        name: new_family_details.name,
        address1: new_family_details.address1,
        address2: new_family_details.address2,
        home_phone: new_family_details.home_phone,
        mobile_phone: new_family_details.mobile_phone,
        email: new_family_details.email,
        wedding_date: new_family_details.wedding_date
    });

    res.status(201).send({code: 201, message: "Family Added"});

}


// Handle diplay of families on GET
const families_list = async (req,res)=>{
    const families = await db.Family.findAll();
    res.status(200).send({code: 200, families});
}


//Handle display of specific person on GET
// const family_details = (req, res)=>{
//     res.send("Sending Details for specific family")
// }


// Handle edit of specific person details on PUT 
// const person_edit = (req, res)=>{
//     res.send("Edit person Details")
// }


//Handle delete of specific person details on DELETE
// const person_delete = (req, res)=>{
//     res.send("delete person");
// }


module.exports = {
    family_create,
    families_list,
    // person_details,
    // person_edit,
    // person_delete
}