const mongoose = require ("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Produk',
        require: true
    },

    pengguna_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Pengguna',
        require: true
    },

    rating:{
        type: Number,
    },

    komentar:{
        type: deskripsi,
    },

    tanggal_ulasan:{
        type: Date,
    }
});

const Ulasan = mongoose.model("Ulasan", ulasanSchema);
module.exports = Ulasan;