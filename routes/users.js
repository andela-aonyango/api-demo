var express = require('express'),
  router    = express.Router();

var mongoose = require('mongoose'),
  User       = require('../models/user.js');

// get users
router.get('/', function(request, response, next) {
  User.find(function(error, users){
    if (error) {
      return next(error);
    }
    response.json(users);
  });
});

// create a user
router.post('/', function(request, response, next) {
  User.create(request.body, function(error, post) {
    if (error) {
      return next(error);
    }
    response.json(post);
  });
});

module.exports = router;
