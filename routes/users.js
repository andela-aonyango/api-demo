var express = require('express'),
  router    = express.Router();

var mongoose = require('mongoose'),
  User       = require('../models/user.js');

// get all users
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

// get a user
router.get('/:id', function(request, response, next) {
  User.findById(request.params.id, function(error, post) {
    if (error) {
      return next(error);
    }
    response.json(post);
  });
});

// update a user
router.put('/:id', function(request, response, next) {
  User.findByIdAndUpdate(
    request.params.id, request.body, function(error, post) {
      if (error) {
        return next(error);
      }
      response.json(post);
  });
});

// delete a user
router.delete('/:id', function(request, response, next) {
  User.findByIdAndRemove(
    request.params.id, request.body, function(error, post){
      if (error) {
        return next(error);
      }
      response.json(post);
    });
});

module.exports = router;
