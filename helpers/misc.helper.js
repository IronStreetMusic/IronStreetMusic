
module.exports = (hbs) => {
    hbs.registerHelper('isMaxSpectator', function (arg1, arg2, opts) {
        if (arg1 >= arg2) {
            return true;
        }
        else {
            return false;
        }
    });

};
