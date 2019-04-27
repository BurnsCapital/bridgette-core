const { log, web3 } = require('../lib');

log.info('[dflow/controllers/getBlockNumber.js] getBlockNumber loaded');

//provide a random response

async function getResponse(){
    //get the block number
    var bn = await web3.eth.getBlockNumber();
    var responses = [
        `The current block height is ${bn}`,
        `We are at block ${bn}`,
        `The latest one I see is ${bn}`
    ]
    log.debug('[dflow/controllers/getBlockNumber.js] possible responses: ' + responses); 
    return responses[Math.floor(Math.random() * responses.length)]; 
}

module.exports = async () =>{
    console.log('calls getblocknumber');
    await getResponse()
    .then( (res) => { 
        console.log(res);
        log.debug('[dflow/controllers/getBlockNumber.js] getResponse(): ' + res);
        return{
           message : res
        };
    })
    .catch((err) => {
		log.error('[dflow/controllers/getBlockNumber.js] getResponse(): ' + err);
	});
} 