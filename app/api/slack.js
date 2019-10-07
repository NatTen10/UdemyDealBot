const api = require('../helpers/apirequests');
const hostname = process.env.SLACK_HOSTNAME;
const path = process.env.SLACK_PATH;

// Posts a message to slack
const postToSlack = (message) => { 
    let data = {
        "text" : message 
    };
    api.requestPOST(hostname,path,data);
}

module.exports = {
    postToSlack
}