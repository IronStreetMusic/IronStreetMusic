
const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../models/artist.model');
const event = require('../models/event.model');

module.exports.create = (req, res, next) => {
    //res.render('profileartist/profile');
    event.find({artist:req.session.currentUser._id})
    .then(events => {
      res.render('profileartist/profile', { 
        events
      });
    })
    .catch(error => {
      next(error);
    });
}

module.exports.list = (req, res, next) => {
   
  };

  module.exports.update = (req, res, next) => {
    const id = req.params.id;
    
    events.findById(id)
      .then(event => {
        if (event) {
          res.render('events/event', {
            event
          });
        } else {
          next(createError(404, `event with id ${id} not found`));
        }
      })
      .catch(error => next(error));
  }
  
  module.exports.doUpdate = (req, res, next) => {
    const id = req.params.id;
  
    event.findById(id)
      .then(event => {
        if (event) {
          Object.assign(event, req.body);
  
          celebrity.save()
            .then(() => {
              res.redirect(`/profile/${id}`);
            })
            .catch(error => {
              if (error instanceof mongoose.Error.ValidationError) {
                res.render('events/create', { 
                  event: event,
                  errors: error.errors
                });
              } else {
                next(error);
              }
            })
        } else {
          next(createError(404, `event with id ${id} not found`));
        }
      })
      .catch(error => next(error));
  }

  module.exports.delete = (req, res, next) => {
    const id = req.params.id;
    
    event.findByIdAndDelete(id)
      .then(() => {
        res.redirect('/profile');
      })
      .catch(error => next(error));

    }

  module.exports.warnUser = (req, res, next) => {
    res.send('Tu eres muy listo')
  }

// module.exports.list = (req, res, next) => {

// }
