
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
        maxSpectators: req.body.gauging,
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

module.exports.update = (req, res, next) => {
    console.log("Entra en el update")
};

module.exports.doUpdate = (req, res, next) => {
    res.send("Añadir evento: " + req.params)
    console.info("añadir evento: " + req.params)
    Event.findOneAndUpdate({
        "_id": req.params.id
    }, {
        $inc: {
            "totalSpectator": 1
        }
    })
        .then((result) => {
            res.redirect('/profileuser')
        });
};

