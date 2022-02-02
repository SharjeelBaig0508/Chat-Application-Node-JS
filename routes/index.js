var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ response_code: 200, response_message: 'Success Message', response_data: 'Server Running!!!' });
});

module.exports = router;
