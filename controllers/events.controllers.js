
const createError = require('http-errors');
const mongoose = require('mongoose');

const Event = require('../models/event.model');

module.exports.create = (req, res, next) => {
    res.render("events/event")
};

module.exports.doCreate = (req, res, next) => {

    let event = new Event({
        name: req.body.name,
        date: new Date(req.body.datetime),
        street: req.body.address,
        city: req.body.city,
        location: {
            coordinates: [req.body.long, req.body.lat]
        },
        musicStyles: req.body.genre,
        artist: req.session.currentUser._id
    });

    event.save()
        .then((data) => {
            res.redirect('/profile');
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('error');
            } else {
                next(error);
            }
        });

};

