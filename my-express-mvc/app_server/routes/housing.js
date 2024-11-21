const express = require ("express");
const router = express.Router();
const hsController = require("../controllers/controllersHousing");
router.get("/", hsController.Index);
module.exports= router;