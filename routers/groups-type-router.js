const express = require('express');
const router = express.Router();
const groupsController = require('../controller/groupsController');


//create new group
router.post('/v1/groups', groupsController.groups_create);

 
//list all group
router.get('/v1/groups', groupsController.groups_list);


//get groups detail
router.get('/v1/groups/:id', groupsController.groups_details);


//edit group details
router.put('/v1/groups/:id', groupsController.groups_edit);


//delete groups
router.delete('/v1/groups/:id', groupsController.groups_delete);



module.exports = router;