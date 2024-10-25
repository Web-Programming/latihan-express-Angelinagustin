const express = require ("express");
const router = express.Router();
const produkController = require("../controllers/controllerProduk");
// fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongggodb 
router.get("/produk", produkController.index);
router.post("/tambah/produk", produkController.insert);
module.exports= router;