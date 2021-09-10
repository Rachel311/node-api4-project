const express = require('express');
const User = require('./users-model');
const router = require('express').Router();

router.get('/users', (req, res, next) => {
  try {
    res.json(User.get())
  } catch (err) {
    next(err)
  }
});

router.post('/register', (req, res, next) => {
  try {
    res.json(User.insert(req.body))
  } catch (err) {
    next(err)
  }
});

  router.post('/api/login', (req, res) => {
   try {
      res.json(User.login(req.body))
   } catch (err) {
     next(err)
   }
  });

  module.exports = router;