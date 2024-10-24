const express = require ("express");
const router = express.Router();
const mhsController = require("../controllers/controllersMahasiswa");
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongggodb 
router.get("/", mhsController.index);
router.post("/insert", mhsController.insert);
module.exports= router;