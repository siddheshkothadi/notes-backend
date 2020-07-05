const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('./models/user.model')
require('dotenv').config();

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(e => {
        done(new Error("Failed to deserialize an user "+e));
      });
});

passport.use(new GoogleStrategy({
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  async (request, accessToken, refreshToken, profile, done) => {
    const currentUser = await User.findOne({googleId : profile.id});
      if (!currentUser) {
        console.log(JSON.stringify(profile))
        const newUser = await new User({
          googleId : profile.id,
          name : profile.displayName,
          picture : profile.picture
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
    done(null, currentUser);
  }
));