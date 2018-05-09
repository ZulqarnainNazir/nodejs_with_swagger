const express = require('express');
const router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

module.exports = (app) => {
  app.use('/api', router);
};

router.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { res.sendStatus(404); }
    else { res.sendStatus(200);}
  })(req, res, next);
});

