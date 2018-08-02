
const mongoose = require('mongoose');

module.exports = mongoose.model('Event', new mongoose.Schema({
    nameEvent: {
        type: String,
        required: 'Name event is required'
    },
    text: {
        type: String,
        required: 'Comment is required'
    },
    celebrity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Celebrity',
        required: true
    }
}, {
    timestamps: true
}));