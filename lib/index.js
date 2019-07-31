// capture all common connections

var botUnits = require( './botUnits' );
//var bot = require( './discord' );
var log = require( './logger' );
var web3 = require( "./etherNode" );
// var watson = require( './watson' );
var btc = require("./btcNode");
var zec = require("./zecNode");

module.exports = {
    botUnits : botUnits,
  //  bot  : bot,
    log  : log,
    web3 : web3,
    btc  : btc,
    zec  : zec,
}

//copy paste version
// const { bot, botUnits, log, web3, watson } = require('./common');
