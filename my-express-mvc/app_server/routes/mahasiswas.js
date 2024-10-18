const express = require ("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllersMahasiswa");
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongggodb 
router.get("../mahasiswa", mahasiswaController.index);
module.exports= router;