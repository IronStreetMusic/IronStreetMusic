
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Ingrese un email válido'],
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    styles: {
        type: Array,
        required: true
    }
});