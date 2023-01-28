const express = require('express');
const router = express.Router();
const familyController = require('../controller/familyController');


//create new preson
router.post('/v1/families', familyController.family_create);

 
//list all families
router.get('/v1/families', familyController.families_list);


//get family detail
router.get('/v1/families/:id', familyController.family_details);


//edit person details
// router.put('/v1/person/:id', peopleController.person_edit);


//delete person
// router.delete('/v1/person/:id', peopleController.person_delete);



module.exports = router;