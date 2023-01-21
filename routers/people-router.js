const express = require('express');
const router = express.Router();
const peopleController = require('../controller/peopleController');


//create new preson
router.post('/v1/person', peopleController.person_create);

 
//list all people
router.get('/v1/people', peopleController.people_list);


//get person detail
router.get('/v1/person/:id', peopleController.person_details);


//edit person details
router.put('/v1/person/:id', peopleController.person_edit);


//delete person
router.delete('/v1/person/:id', peopleController.person_delete);



module.exports = router;