// calls an external api defined in the env var TICKERPRICE with a ticker symbol

const axios = require('axios');

async function getTicker( blockchain ) {
    let res = await axios.get(process.env.TICKERFEED + "\\" + blockchain + "\\metrics" );
    return res;
}
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })


async function getResponse( ticker ){
    //get the balance
    var responses = [
        `The latest price for ${ticker.data.name} is $${formatter.format(ticker.data.market_data.price_usd)}`,
        `$${formatter.format(ticker.data.market_data.price_usd)}`,
        `${ticker.data.name} is ${(ticker.data.market_data.percentchange_usd_last_24_hours > 0)? "up":"down"} ${ticker.data.market_data.percentchange_usd_last_24_hours} since yesterday. The current price is $${formatter.format(ticker.data.market_data.price_usd)}` 
    ]
    log.debug('[dflow/controllers/getPrice.js] possible responses: ' + responses); 
    return responses[Math.floor(Math.random() * responses.length)]; 
}


module.exports = async (blockchain) => {
    log.debug('calls getPrice: '+ blockchain);
    let ticker = await getTicker( blockchain );
    let res = await getResponse( ticker );
    log.debug('[dflow/controllers/getPrice.js] getResponse(): ' + res);
    return{
            message : res    
        };

}