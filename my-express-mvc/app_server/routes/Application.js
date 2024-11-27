const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/ControllersApplication');

// Route untuk registrasi housing
router.post('/apply', applicationController.submitApplication);

module.exports = router;