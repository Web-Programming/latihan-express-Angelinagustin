const mongoose = require ("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama_kategori: {
        type : String,
    },

    deskripsi:{
        type: String,
    },

    creat_at:{
        type: Date,
    },

    update_at:{
        type: Date,
    },

    satus:{
        type:Boolean,
    }
});

const Kategori = mongoose.model("Kategori", kategoriSchema);
module.exports = Kategori;