const { log } = require('../lib');

log.info('[dflow/controllers/getBlockNumber.js] getBlockNumber loaded');

//provide a random response

async function getResponse(){
    var pkg = require('../../package.json');
    var responses = [
        `I am running on version ${pkg}`
    ]
    log.debug('[dflow/controllers/getBlockNumber.js] possible responses: ' + responses); 
    return responses[Math.floor(Math.random() * responses.length)]; 
}

module.exports = async () =>{
    let response = getResponse(); 
    log.debug('[dflow/controllers/getBlockNumber.js] getResponse(): ' + response);
    return{
        message : response
    }
} 