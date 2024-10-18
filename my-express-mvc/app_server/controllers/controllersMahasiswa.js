const Mahasiswa = require("../models/mahasiswa");

exports.index = async(req,res) =>{
    try {
        const mahasiswas = await Mahasiswa.find({});
        res.status(200).json(mahasiswas);
        if(!mahasiswas){
            res.status(404).json ({message: "data kosong"});
        }
    }catch(error) {
        res.status(500).json ({message: "Error retrieving users", error});
    }
}