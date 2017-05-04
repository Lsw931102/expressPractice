var express = require('express');
var router = express.Router();


router.get('/index', function(req, res, next) {
  return res.send('i am indexffffffffff');
});

module.exports = router;