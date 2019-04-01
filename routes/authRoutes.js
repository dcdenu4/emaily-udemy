// NPM module, not ours
const passport = require('passport');

// exporting a function from this file
module.exports = (app) => {

    // GoogleStrategy has an internal identifier of 'google'
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'] // what information to request permissions for
        })
    );

    // If here, 'code' will be availabe, so Passport will know to turn that code 
    // into an actual profile
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'));
}