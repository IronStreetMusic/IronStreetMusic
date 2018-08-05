require('dotenv').config(); // Sirve para poder leer variables de entorno

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');

// Routes
const usersRouter = require('./routes/users.routes');
const sessionsRouter = require('./routes/sessions.routes');
const profilesRouter = require('./routes/profiles.routes');
const eventsRouter = require('./routes/events.routes');
const profileuserRouter = require('./routes/profileuser.routes');

const app = express();


require('./configs/db.config'); //Conectamos con la bbdd
require('./configs/hbs.config'); //Registrar partials
require('./configs/passport.config').setup(passport);

//require('./configs/session.config')(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ASDFASDFASDFASDFSADF',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000
  }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.session = req.user;
  next();
});


app.use('/', sessionsRouter);
app.use('/signup', usersRouter);
app.use('/profile', profilesRouter);
app.use('/events', eventsRouter);
app.use('/profileuser', profileuserRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
