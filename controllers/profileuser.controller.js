
const createError = require('http-errors');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const Event = require('../models/event.model');

module.exports.create = (req, res, next) => {
    let styles = req.session.currentUser.stylePreferences;
    //console.log("Preferencias del usuario Rock: " + styles)

    Event.find({
        musicStyles: {
            $all: [ styles ]
        }
    })
        .then(events => {
            //console.log("EVentos rock: "+ events)
            let myUser = req.session.currentUser;

            console.log(myUser);

            res.render('profileuser/profile', {
                events: events,
                user: myUser
            });
        })
        .catch(error => {
            next(error)
        })


    // res.render('profileuser/profile');
    // Event.find({
    //         artist: req.session.currentUser._id
    //     })
    //     .then(events => {
    //         res.render('profileartist/profile', {
    //             events
    //         });
    //     })
    //     .catch(error => {
    //         next(error);
    //     });
}

// module.exports.doUpdate = (req, res, next) => {
//     const id = req.params.id;

//     Event.findById(id)
//         .then(event => {
//             if (event) {
//                 Object.assign(event, req.body);

//                 celebrity.save()
//                     .then(() => {
//                         res.redirect(`/profile/${id}`);
//                     })
//                     .catch(error => {
//                         if (error instanceof mongoose.Error.ValidationError) {
//                             res.render('events/create', {
//                                 event: event,
//                                 errors: error.errors
//                             });
//                         } else {
//                             next(error);
//                         }
//                     })
//             } else {
//                 next(createError(404, `event with id ${id} not found`));
//             }
//         })
//         .catch(error => next(error));
// }
