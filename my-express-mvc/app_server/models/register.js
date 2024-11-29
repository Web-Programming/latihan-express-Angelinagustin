const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
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

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;