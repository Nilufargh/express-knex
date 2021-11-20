const express = require('express');
const personController =require('../controller/person');

const router = express.Router();
router.post('/person', personController.createPerson);
router.delete('/person', personController.deletePerson);
router.get('/person', personController.getAllPersons);

module.exports = router;