const express = require('express');
const router = express.Router();
const personCategoriesController = require('../controller/personCategoriesController');


//create new preson
router.post('/v1/person-categories', personCategoriesController.person_category_create);

 
//list all families
router.get('/v1/person-categories', personCategoriesController.person_category_list);


//get family detail
// router.get('/v1/person-categories/:id', familyController.family_details);


//edit family details
router.put('/v1/person-categories/:id', personCategoriesController.person_category_edit);


//delete family
router.delete('/v1/person-categories/:id', personCategoriesController.person_category_delete);



module.exports = router;