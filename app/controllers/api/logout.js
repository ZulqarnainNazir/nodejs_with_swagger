const express = require('express');
const router = express.Router();

module.exports = (app) => {
  app.use('/api', router);
};

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/api');
});

