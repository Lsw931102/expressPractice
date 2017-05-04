var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.send('respond with a resource   b2');
});

router.get('/logout', function(req, res, next) {
  //return res.send('respond with a resource   b2');

  res.setHeader("wooa", "sdfasfasf")
  res.write("respond with a resource   b2");
  return res.end();
});

router.get('/zhuce', function(req, res, next) {
  res.send('respond with a resource   b2');
});

module.exports = router;
