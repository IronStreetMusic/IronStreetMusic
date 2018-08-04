
module.exports.authenticateUser = (req, res, next) => {
    if (req.session.currentUser) {
        req.currentUser = req.session.currentUser;
        res.locals.currentUser = req.session.currentUser;
        next();
    } else {
        res.redirect("/");
    }
};

module.exports.userNotAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        res.redirect("/");
    } else {
        next();
    }
}
