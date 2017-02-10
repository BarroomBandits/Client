'use strict'

var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const dotenv = require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('users')
  .then(function(data){
    res.json(data);
  });
});

module.exports = router;
