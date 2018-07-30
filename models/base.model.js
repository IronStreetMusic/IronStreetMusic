
const mongoose = require('mongoose');
const baseOptions = {
    discriminatorKey: 'itemtype',
    collections: 'ironstreetmusic'
};

const baseSchema = new mongoose.Schema({
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
        default: 'Madrid',
        required: true
    }
}, { timestamps: true });

const Base = mongoose.model('Base', baseSchema);
module.exports = Base;