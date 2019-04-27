const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const server = express();
const assistant = dialogflow();

const { getBlockNumber, getBalance, getTransaction, sendSignedTransaction, getGasPrice, getBlock, version } = require( "./controllers" );


/*
* intent flows
*
*/

assistant.intent('helloWorld', conv => {
	let name = conv.parameters.name;
	conv.ask('Hello, welcome ' + name);
});

assistant.intent('etc_getBlockNumber', conv => {
	conv.ask( getBlockNumber().message );
});

assistant.intent('etc_getBalance', conv => {
	conv.ask( getBalance(conv.parameters.account).message );
});

assistant.intent('etc_getTransaction', conv => {
	conv.ask( getTransaction(conv.parameters.transaction).message );
});

assistant.intent('etc_sendSignedTransaction', conv => {
	conv.ask( sendSignedTransaction(conv.parameters.signedTX).message );
});

assistant.intent('etc_getGasPrice', conv => {
	conv.ask( getGasPrice().message );
});


assistant.intent('etc_getBlock', conv => {
	conv.ask( getBlock(conv.parameters.blockNumber).message );
});

//admin functions
assistant.intent('version', conv => {
	conv.ask( version().message );
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
