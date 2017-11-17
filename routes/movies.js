const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config/config');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	title: "Dunkirk"
  }, {
  	id: 2,
  	username: "Justice League"
  }]);
});

router.get('/upcoming', function(req, res, next) {
    const { baseUrl, apiKey, upcomingTitles } = config.tmdb;
    request(baseUrl + upcomingTitles, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
              console.log(body);
              res.send(body);
            } else {
              res.json(error);
            }
        }
    );
});

router.get('/popular', function(req, res, next) {
    const { baseUrl, apiKey, popular } = config.tmdb;
    request(baseUrl + popular, {
            method: "GET",
            qs: {
                api_key: apiKey
            }
        },
        function(error, response, body) {
            if (!error && response.statusCode === 200) {
              console.log(body);
              res.send(body);
            } else {
              res.json(error);
            }
        }
    );
});

module.exports = router;
