const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },

});

const Applyhousing = mongoose.model('Applyhousing', applySchema);

module.exports = Applyhousing;