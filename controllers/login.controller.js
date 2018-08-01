
const passport = require('passport');

module.exports.create = (req, res, next) => {
  res.render('index');
}

module.exports.doCreate = (req, res, next) => {
  function renderWithErrors(errors) {
    res.status(400).render('error', {
      user: req.body,
      errors: errors
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    renderWithErrors({
      email: email ? undefined : 'Email is required',
      password: password ? undefined : 'Password is required'
    });
  } 
  else {
    passport.authenticate('local-auth', (error, user, validation) => {
      if (error) {
        next(error);
      } else if (!user) {
        renderWithErrors(validation);
      } else {
        // res.send("No ha ido bien 3")
        req.login(user, (error) => {
          if (error) {
            next(error)
          } else {
            res.send("Oh yeah!")
            res.redirect('/signup')
          }
        });
      }
    })(req, res, next);
  }
}
