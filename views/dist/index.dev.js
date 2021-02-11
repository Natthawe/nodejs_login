"use strict";

var express = require('express');

var path = require('path');

var cookiesSession = require('cookie-session');

var bcrypt = require('bcrypt');

var dbConnection = require('./database');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var app = express();
app.use(express.urlencoded({
  extended: false
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookiesSession());