const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require('./models/user.model')

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
    clientID:     '564708284077-oong28v8d1066b161j0tduekjkrlns0g.apps.googleusercontent.com',
    clientSecret: 'UdEmyW0enFk4OtCwFwX9TvTC',
    callbackURL: "http://localhost:6969/auth/google/callback",
    passReqToCallback   : true
  },
  async (request, accessToken, refreshToken, profile, done) => {
    const currentUser = await User.findOne({googleId : profile.id});
      // create new user if the database doesn't have this user
      if (!currentUser) {
        const newUser = await new User({
          googleId : profile.id,
          name : profile.name.givenName + ' ' + profile.name.familyName,
          picture : profile.picture
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
    console.log("here, current user = "+ currentUser.user)
    done(null, currentUser);
  }
));