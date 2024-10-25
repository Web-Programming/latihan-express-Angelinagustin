const mongoose = require ("mongoose");

const produkSchema = new mongoose.Schema({
    nama: {
        type : String,
    },

    deskripsi:{
        type: String,
    },

    harga:{
        type: Number,
    },

    stok:{
        type: Number,
    }
});

const Produk = mongoose.model("Produk", produkSchema);
module.exports = Produk;