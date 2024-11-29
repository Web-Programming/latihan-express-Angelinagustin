const express = require('express');
const router = express.Router();
const housingController = require('../controllers/housingController');

router.get('/housing/:id', housingController.getHousingById);
router.post('/housing/:id/apply', housingController.createRegistration); // Perhatikan route ini

module.exports = router;