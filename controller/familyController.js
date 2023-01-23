// Handle creation of family on POST
const family_create = (req, res)=>{
    res.send('Adding new family');
}


// Handle diplay of families on GET
const families_list = (req,res)=>{
    res.send("Sending family list");
}


//Handle display of specific person on GET
const family_details = (req, res)=>{
    res.send("Sending Details for specific family")
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