// Handle creation of person on POST
const person_create = (req, res)=>{
    res.send('creating new person');
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