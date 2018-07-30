
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const Base = require('./base.model');

const vipSchema = new mongoose.Schema({
    active: {
        type: String,
        required: true
    }
});

vipSchema.pre('save', function (next) {
    if (this.isNew) {
        this.token = generateToken();
    }

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

vipSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password);
}

const _vipSchema = Base.discriminator('Vip', vipSchema);
module.exports = _vipSchema;
