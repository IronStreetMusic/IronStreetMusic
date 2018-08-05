const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../models/artist.model');
const User2 = require('../models/user.model');

module.exports.create = (req, res, next) => {
  res.render('index');
}

module.exports.doCreate = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.render("sessions/create", {
      user: new User(req.body),
      errors: {
        "email": "Can't be blank",
        "password": "Can't be blank"
      }
    })
  } else {
    User.findOne({
        email: email
      })
      .then((user) => {
        if (user) {
          console.log("User 1: " + user)
          user.checkPassword(password)
            .then((match) => {
              if (match) {
                  req.session.currentUser = user;
                  res.redirect("/profile");
              } else {
                res.render("sessions/signup", {
                  user: new User(req.body),
                  errors: {
                    "password": "Wrong password"
                  }
                })
              }
            })
            .catch(error => next(error));
        } else {
          User2.findOne({
            email: email
          })
          .then((user) => {
            if (user) {
              user.checkPassword(password)
                .then((match) => {
                  if (match) {
                    req.session.currentUser = user;
                    res.redirect("/profileuser");
                  }
                })
            }
            else {
              res.render("sessions/signup", {
                user: new User(req.body),
                errors: {
                  "email": "Does not exist"
                }
              })
            }
          })
          
        }
      })
      .catch(error => next(error))
  }
}

module.exports.delete = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
}

