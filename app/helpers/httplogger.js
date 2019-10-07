/**
 *  Logs results of HTTP requests
 *  Author: Nathanial Sydenham (nathanial.sydenham@ten10.com)
 *  Creation: 07/10/2019      
 */

 const logResults = (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`)
    });
    res.on('end', () => {
        console.log("End of response");
    });
 }

 const logError = (error) => {
    console.error(`problem with request: ${error.message}`);
 }

 module.exports = {
     logResults,
     logError
 }