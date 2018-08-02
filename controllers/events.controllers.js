
const createError = require('http-errors');
const mongoose = require('mongoose');

module.exports.create = (req, res, next) => {
    res.render("events/event")
}

module.exports.doCreate = (req, res, next) => {
    res.redirect("/")
}

