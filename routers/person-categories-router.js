const express = require('express');
const router = express.Router();
const familyController = require('../controller/familyController');


//create new preson
router.post('/v1/person-categories', familyController.family_create);

 
//list all families
router.get('/v1/person-categories', familyController.families_list);


//get family detail
router.get('/v1/person-categories/:id', familyController.family_details);


//edit family details
router.put('/v1/person-categories/:id', familyController.family_edit);


//delete family
router.delete('/v1/person-categories/:id', familyController.family_delete);



module.exports = router;