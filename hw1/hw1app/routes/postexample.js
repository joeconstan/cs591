var express = require('express');
var router = express.Router();

/* POST page. */
router.post('/', function(req, res) {
	let param = req.body.param;
	//res.render('index', { title: param });

	res.send({title: param});
  });

module.exports = router;