// import modules
const LocalStratergy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AppleStrategy = require("passport-apple");
const User = require("./models/user");

// initialize strategies
const initializePassport = (passport) => {
    const authenticateUser = (email, password, cb) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false, { message: "User not found" });
            }
            if (!user.isValidPassword(password)) {
                return cb(null, false, { message: "Password incorrect" });
            } else {
                return cb(null, user);
            }
        });
    };

    // local strategy
    passport.use(new LocalStratergy({usernameField : email}, authenticateUser));

    // google strategy
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/bookfind",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));

    // facebook strategy
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        // callbackURL: "http://localhost:3000/auth/facebook/callback"      facebook don't use this anymore ?
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));

    // apple strategy
    
};

module.exports = initializePassport;