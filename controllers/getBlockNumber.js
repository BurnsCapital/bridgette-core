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
}

module.exports = async (blockchain) => {
    log.debug('calls getblocknumber: '+ blockchain);
    let bn;
    switch (blockchain.toLowerCase()) {
        case "zcash":
            log.debug('case zcash');
            bn = await zec.getinfo();
            break;
        case "bitcoin":
            log.debug('case bitcoin');
            bn = await btc.getinfo(); 
            break;
        default:
            log.debug('case default(bitcoin)');
            bn = await btc.getinfo(); 
            break;
    };

    let res = getResponse(bn.blocks);
    log.debug('[dflow/controllers/getBlockNumber.js] getResponse(): ' + res);
    return{
            message : res    
        };
}; 