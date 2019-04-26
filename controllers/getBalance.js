const { log } = require('../lib');

log.info('[dflow/controllers/getBlockNumber.js] getBlockNumber loaded');

//provide a random response

async function getResponse(account){
    //get the balance
    var bal = await  web3.eth.getBalance(account);
    var responses = [
        `The balance for the account starting with ${account.substring(0,10)} is ${bal * .000000000000000001}`,
        `${bal * .000000000000000001}`
    ]
    log.debug('[dflow/controllers/getBlockNumber.js] possible responses: ' + responses); 
    return responses[Math.floor(Math.random() * responses.length)]; 
}

module.exports = async (account) =>{
    let response = getResponse(account); 
    log.debug('[dflow/controllers/getBlockNumber.js] getResponse(): ' + response);
    return{
        message : response
    }
} 