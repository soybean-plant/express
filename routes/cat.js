var express = require('express');
var router = express.Router();
const request = require('request');  // 事前に npm install request
const cors = require('cors');

router.use(cors())

router.get('/', (req, res, next) => {
  request('https://api.thecatapi.com/v1/images/search', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.json(data);  // 猫画像の情報をそのまま返す
    } else {
      next(error || new Error('Request failed'));
    }
  });
});

module.exports = router;