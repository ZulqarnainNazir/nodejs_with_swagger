const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
var dateFormat = require('dateformat');

module.exports = (app) => {
  app.use('/api', router);
};

router.post('/signup', (req, res, next) => {
  newUser = new User();
  var day = dateFormat(Date.now(), "yyyy-mm-dd HH:MM:ss");
  newUser.email    = req.body.email;
  newUser.password = newUser.generateHash(req.body.password);
  newUser.name = req.body.name;
  newUser.created_date = day;
  newUser.updated_date = day;
  newUser.status = 'active'; //inactive for email actiavators
  // newUser.active_hash = active_code;
  newUser.save(function(err) {
    if (err)
      res.sendStatus(500);
    else
      res.sendStatus(200);
  });
});

