require('dotenv').config();
const https = require('https');
const udemy = require('./api/udemy.js');
const slack = require('./api/slack.js');

// Post a message to slack
slack.postToSlack(https,"Hello, RJ");