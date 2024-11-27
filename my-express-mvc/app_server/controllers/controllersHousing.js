const Housing = require("../models/housing");
const Index = async(req,res) =>{
    try {
        const housing = await Housing.find({});
        if(!housing || housing.length === 0){
            res.status(404).json ({message: "data kosong"});
        }
        res.status(200).json(housing);
    }catch(error) {
        res.status(500).json ({message: "Error retrieving users", error});
    }
};


const GetById = async (req, res) => {
    try {
        const id = req.params.id;
        const housing = await Housing.findById(id);
        if (!housing) {
            return res.status(404).json({ message: "Housing not found" });
        }
        res.status(200).json(housing);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving housing data", error });
    }
};

module.exports = { Index, GetById };