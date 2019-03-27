var express = require('express');
var router = express.Router();
var sstatus = "";
var ppb = "";
/* GET butter page. */
router.get('/', function(req, res, next) {
  res.render('butter', { string: 'margarine' });
});



router.get('/weather', function(req, res, next) {
    
    var request = require('request');

var url = 'https://api.aerisapi.com/airquality/02215/';

var paramsObject = { client_id:'0pP7RoIiqg201Ow8dHTT1', client_secret:'MBC8PO79Alo3l0Gg9YdvFQSaHuA2DVEYlMylqiP1' };

request({url:url, qs:paramsObject}, function(err, response, body) {
  if(err) { console.log(err); return; }
  sstatus = response.body;
  var data = JSON.parse(sstatus);
  sstatus = data.response[0].periods[0].pollutants[0].name;
  ppb = data.response[0].periods[0].pollutants[0].valuePPB;
});
    
    
    res.render('butter', { string: sstatus, string2:ppb });
});   

module.exports = router;
