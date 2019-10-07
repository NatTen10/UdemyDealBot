/**
*   This file abstracts the making of API requests
*   Author:     Nathanial Sydenham (nathanial.sydenham@ten10.com)
*   Creation:   07/10/2019
*/

const https = require('https');
const logger = require('./httplogger');

/** Makes a post request to a server
@param {string} hostname - The hostname of the server to make the request to ex: 'api.example.com'
@param {string} path - The resource on the server to request ex: '/users/getUser'
@param {object} data - A javascript object to be sent as the data payload of the HTTP request ex: {'name': 'Exa Mple'}
*/
const requestPOST = (hostname, path, data) => {
    const dataString = JSON.stringify(data);
    let options = {
        hostname: hostname,
        path: path,
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': dataString.length
        }
    };

    // Log the results of the request
    const req = https.request(options, res => {
        logger.logResults(res);
    });

    // Listen for an error and log the error if one occurs
    req.on('error', (e) => {
        logger.logError(e);
    });
    
    req.write(dataString);
    req.end();
};

module.exports = {
    requestPOST
};