const passport = require('passport');
// Only concerned with the strategy property
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            // route user is sent to after they grant permission to application
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {              //callback function with user info to add to DB
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile ', profile);
        }
    )
);