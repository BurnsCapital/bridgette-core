const { log } = require('../lib');

log.info('[dflow/controllers/getBlockNumber.js] getBlockNumber loaded');

//provide a random response

async function getResponse(){
    //get the block number
    var bn = 11; //await web3.eth.getBlockNumber();
    var responses = [
        `The current block height is ${bn}`,
        `We are at block ${bn}`,
        `The latest one I see is ${bn}`
    ]
    log.debug('[dflow/controllers/getBlockNumber.js] possible responses: ' + responses); 
    return responses[Math.floor(Math.random() * responses.length)]; 
}

module.exports = async () =>{
    let response = getResponse(); 
    log.debug('[dflow/controllers/getBlockNumber.js] getResponse(): ' + response);
    return{
        message : "im still working on the skill"
    }
} 