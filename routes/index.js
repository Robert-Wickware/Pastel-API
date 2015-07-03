/// <reference path="../typings/tsd.d.ts" />

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('Pastel API Routing Page');
});

module.exports = router;