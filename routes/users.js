var express = require('express'),
  router    = express.Router();

var mongoose = require('mongoose'),
  User       = require('../models/user.js');

/* GET users listing. */
router.get('/', function(request, response, next) {
  User.find(function(error, users){
    if (error) {
      return next(error);
    }
    response.json(users);
  });
});

module.exports = router;
