const express = require("express");
const router = express.Router();
const housingController = require("../controllers/controllersHousing");

router.get("/", housingController.Index);
module.exports = router;