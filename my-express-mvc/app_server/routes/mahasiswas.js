const express = require ("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllersMahasiswa");
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongggodb 
router.get("/", mahasiswaController.index);
router.post("/insert", mahasiswaController.insert);
module.exports= router;