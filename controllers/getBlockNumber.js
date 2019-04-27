const { log, web3 } = require('../lib');

log.info('[dflow/controllers/getBlockNumber.js] getBlockNumber loaded');

//provide a random response

async function getResponse(){
    //get the block number
   return web3.eth.getBlockNumber()
    .then( (res) => { 
        
        var responses = [
            `The current block height is ${res}`,
            `We are at block ${res}`,
            `The latest one I see is ${res}`
        ];

        log.debug('[dflow/controllers/getBlockNumber.js] possible responses: ' + responses); 
        log.debug('[dflow/controllers/getBlockNumber.js] getBlockNumber(): ' + res);
        return responses[Math.floor(Math.random() * responses.length)];
    })
    .catch((err) => {
		log.error('[dflow/controllers/getBlockNumber.js] getBlockNumber(): ' + err);
	});
}

module.exports = () => {
    console.log('calls getblocknumber');
    getResponse()
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