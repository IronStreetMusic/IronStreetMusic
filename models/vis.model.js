
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const Base = require('./base.model');

const visSchema = new mongoose.Schema({
    active: {
        type: String,
        default: 'Hola',
        required: true
    },
    style: {
        type: Array,
        default: ['indie'],
        required: true
    }
});

visSchema.pre('save', function (next) {
    // if (this.isNew) {
    //     this.token = generateToken();
    // }

    if (this.isModified('password')) {
        bcrypt.genSalt(SALT_WORK_FACTOR)
            .then(salt => {
                return bcrypt.hash(this.password, salt)
            })
            .then(hash => {
                this.password = hash;
                next();
            })
            .catch(error => next(error));
    } else {
        next();
    }
});

visSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

const _visSchema = Base.discriminator('Vis', visSchema);
module.exports = _visSchema;
