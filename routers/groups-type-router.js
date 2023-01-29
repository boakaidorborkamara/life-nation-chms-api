const express = require('express');
const router = express.Router();
const groupsTypesController = require('../controller/groupTypesController');


//create new group type
router.post('/v1/group-types', groupsTypesController.group_type_create);

 
//list all group type
router.get('/v1/group-types', groupsTypesController.group_types_list);


//get group types detail



//edit group 
router.put('/v1/group-types/:id', groupsTypesController.group_type_edit);


//delete group types
router.delete('/v1/group-types/:id', groupsTypesController.group_type_delete);



module.exports = router;