
const session = require('express-session');

const sessionOpts = {
    secret: 'this is my super secure secret',
    resave: true,
    cookie: {
        maxAge: null
    },
    saveUninitialized: true
}

module.exports = (app) => {
    app.use(session(sessionOpts));
}