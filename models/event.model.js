
const mongoose = require('mongoose');
const Artist = require('../models/artist.model')

module.exports = mongoose.model('Event', new mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    },  
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    // location: {
    //     type: {
    //         type: String, // Don't do `{ location: { type: String } }`
    //         enum: ['Point'], // 'location.type' must be 'Point'
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true
    //     }
    // },
    musicStyles: {
        type: Array,
        required: true,
        default: ['rock']
    }, 

    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }
}, {
    timestamps: true
}));