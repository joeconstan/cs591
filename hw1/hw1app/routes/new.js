var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/new', function(req, res) {
  res.send({ string: 'get works :)' });
});

module.exports = router;
