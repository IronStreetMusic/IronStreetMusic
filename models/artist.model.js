const mongoose = require('mongoose');
const User = require('./user.model');


const artistSchema = new mongoose.Schema({
  style: {
    type: String,
    default: 'Rock',
    required: true
  },
  events: {
    type: Array,
    required: true
  }
}, { 
  timestamps: true,
  discriminatorKey: 'kind'
});
    
const Artist = User.discriminator('Artist', artistSchema);
module.exports = Artist;