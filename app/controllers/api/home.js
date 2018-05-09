const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

module.exports = (app) => {
  app.use('/api', router);
};

router.get('/', checkUserAuth, function(req, res, next) {
  // passport.authenticate('local', function(err, user, info) {
  //   if (err) { return next(err); }
  //   if (!user) { return res.sendStatus(403); }
  //   req.logIn(user, function(err) {
  //     if (err) { return next(err); }
  //     return res.sendStatus(200);
  //   });
  // })(req, res, next);
  res.sendStatus(200);
});

function checkUserAuth(req, res, next) {
  if(req.session.user) {
    return next();
  }

  res.sendStatus(401);
}