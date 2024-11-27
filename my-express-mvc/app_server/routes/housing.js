const express = require ("express");
const router = express.Router();
const housingController = require("../controllers/controllersHousing");
router.get("/", housingController.Index);
router.get("/:id", housingController.GetById);
module.exports= router;