const mongoose = require('mongoose');
const User = mongoose.model('User');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},
function(req, email, password, done) { 
      User.findOne({ email:  email }, function(err, user) {
          if (err)
          return done(null, false, req.flash('error', err));

          if (!user)
              return done(null, false, req.flash('error', 'Sorry Your Account Not Exits ,Please Create Account.')); // req.flash is the way to set flashdata using connect-flash
          
          if (!user.validPassword(password))
              return done(null, false, req.flash('error', 'Email and Password Does Not Match.')); // create the loginMessage and save it to session as flashdata

          if(user.status === 'inactive')
           return done(null, false, req.flash('error', 'Your Account Not Activated ,Please Check Your Email')); // create the loginMessage and save it to session as flashdata

          req.session.user = user;
  
          return done(null, user);
      });

  }));

