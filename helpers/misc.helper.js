
module.exports = (hbs) => {
    hbs.registerHelper('isMaxSpectator', function (arg1, arg2, opts) {
        if (arg1 >= arg2) {
            return true;
        }
        else {
            return false;
        }
    });

    hbs.registerHelper('isArtist', function(arg1, opts) {
        console.log("Arg 1: " + arg1)
        console.log("kind: " + arg1.kind)
        
        if (arg1.kind == "Artist") {
            return false;
        }
        else {
            return true;
        }
    });

};
