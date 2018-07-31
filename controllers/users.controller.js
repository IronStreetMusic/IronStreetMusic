const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const Artist = require('../models/artist.model');

const mailer = require('../services/mailer.service');

module.exports.create = (req, res, next) => {
  res.render('sessions/signup');
}

module.exports.doCreate = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.render('sessions/signup', {
          user: req.body,
          errors: { email: 'Email already registered' }
        });
      } else {
        if (req.body.type === 'user') {
          user = new User(req.body);
        } else {
          user = new Artist(req.body);
        }
        return user.save()
          .then(user => {
            mailer.confirmSignUp(user);
            res.redirect('/sessions/signup');
          });
      }
    })
    .catch(error => {
      console.error(error);
      if (error instanceof mongoose.Error.ValidationError) {
        res.render('sessions/signup', {
          user: req.body,
          errors: error.errors
        });
      } else {
        next(error);
      }
    })
}

module.exports.confirm = (req, res, next) => {
  const token = req.query.token

  User.findOne({ token: token, active: false })
    .then(async (user) => {
      if (user) {
        console.log(`Active user ${user.email}`)

        user.active = true;

        return user.save();
      }
    })
    .then(() => {
      res.redirect("/sessions/signup")
    })
    .catch(error => {
      next(error);
    });
}