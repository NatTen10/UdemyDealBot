require('dotenv').config();

const udemy = require('./api/udemy.js');
const slack = require('./api/slack.js');

// Post a message to slack
slack.postToSlack("Hello, World");