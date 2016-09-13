'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use(logger('dev'));

app.use('/', express.static(path.join(__dirname, './')));

app.listen(3000);
