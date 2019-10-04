const postToSlack = (https, message) => {

    const data = JSON.stringify({
        "text" : `${message}` 
    });

    let options = {
        hostname: 'hooks.slack.com',
        path: '/services/T08MK1CBW/BP41PSMK8/2Lr8cZTTl2pHIqHpSm0kxJDb',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    const req = https.request(options, res => {
        console.log(`STATUS: ${rest.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        });
        res.on('end', () => {
            console.log("End of response");
        });       
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.write(data);
    req.end();
}

module.exports = {
    postToSlack
}