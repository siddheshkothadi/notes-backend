const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
  else{
    console.log("login/success doesn't respond a valid user")
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

router.get('/google',
  passport.authenticate('google', { scope: 
      [ 'https://www.googleapis.com/auth/plus.login' ] }
));

router.get( '/google/callback', 
    passport.authenticate( 'google', { 
        successRedirect: CLIENT_HOME_PAGE_URL,
        failureRedirect: '/auth/login/failed',
    })
);

module.exports = router;