const { log, web3, btc, zec } = require('../lib');

log.info('[dflow/controllers/getBlockNumber.js] getBlockNumber loaded');

//provide a random response

function getResponse(res){
    //get the words 
        var responses = [
            `The current block height is ${ res }`,
            `We are at block ${ res }`,
            `The latest one I see is ${ res }`,
            `The last one I saw was ${ res }`
        ];

        log.debug('[dflow/controllers/getBlockNumber.js] possible responses: ' + responses); 
        log.debug('[dflow/controllers/getBlockNumber.js] getBlockNumber(): ' + res);
        return responses[Math.floor(Math.random() * responses.length)];
    })
    .catch((err) => {
		log.error('[dflow/controllers/getBlockNumber.js] getBlockNumber(): ' + err);
	});
}

module.exports = async (blockchain) => {
    log.debug('calls getblocknumber');
    switch (blockchain) {
        case zcash:
            let bn = await zec.getinfo();
            break;
        case bitcoin:
            let bn = await btc.getinfo(); 
            break;
        default:
            let bn = await btc.getinfo(); 
            break;
    }
    let res = getResponse(bn.blocks)
    .catch((err) => {
		log.error('[dflow/controllers/getBlockNumber.js] getBlockNumber(): ' + err);
	});
    log.debug('[dflow/controllers/getBlockNumber.js] getResponse(): ' + res);
    return{
           message : res    
    };
}; 