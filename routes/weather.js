var express = require('express');
var router = express.Router();

const API_KEY = '*********';

router.get('/', async (req, res, next) => {
  try {
    // 東京の現在の天気（摂氏）を取得
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.6895&lon=139.6917&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    // 温度は data.main.temp
    const temp = data.main && data.main.temp;
    res.json({ city: 'Tokyo', tempC: temp });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
