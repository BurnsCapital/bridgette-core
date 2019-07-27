const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const server = express();
const assistant = dialogflow();

const { log } = require('./lib');
const { getBlockNumber, getBalance, getTransaction, sendSignedTransaction, getGasPrice, getBlock, version } = require( "./controllers" );


/*
* intent flows
*
*/

assistant.intent('etc_getBlockNumber', conv => {
	getBlockNumber()
	.then( (res) => {
		log.debug('[index.js] etc_getBlockNumber: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_getBlockNumber: ' + err);
	});
});

assistant.intent('etc_getBalance', conv => {
	getBalance(conv.parameters.account)
	.then( (res) => {
		log.debug('[index.js] etc_getBalance: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_getBalance: ' + err);
	});
});

assistant.intent('etc_getTransaction', conv => {
	getTransaction(conv.parameters.transaction)
	.then( (res) => {
		log.debug('[index.js] etc_getTransaction: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_getTransaction: ' + err);
	});
});

assistant.intent('etc_sendSignedTransaction', conv => {
	sendSignedTransaction(conv.parameters.signedTX)
	.then( (res) => {
		log.debug('[index.js] etc_sendSignedTransaction: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_sendSignedTransaction: ' + err);
	});
});

assistant.intent('etc_getGasPrice', conv => {
	getGasPrice()
	.then( (res) => {
		log.debug('[index.js] etc_getGasPrice: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_getGasPrice: ' + err);
	});
});

assistant.intent('etc_getBlock', conv => {
	getBlock(conv.parameters.blockNumber)
	.then( (res) => {
		log.debug('[index.js] etc_getBlock: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_getBlock: ' + err);
	});
});

//admin functions
assistant.intent('etc_version', conv => {
	version()
	.then( (res) => {
		log.debug('[index.js] etc_version: req: ' + conv +' res: ' + res);
		conv.ask( res.message );
	})
	.catch((err) => {
		log.error('[index.js] etc_version: ' + err);
	});
});


//endflows

//express server
server.set('port', process.env.PORT || 3400);
server.use(bodyParser.json({type: 'application/json'}));

server.post('/webhook', assistant);

server.get('/', (req, res) => res.send('Hello World!'))

server.listen(server.get('port'), function () {
	console.log('Express server started on port', server.get('port'));
});

module.exports = server
