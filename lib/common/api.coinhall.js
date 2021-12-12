'use strict'

const got = require('got');

async function getPoolPrices(unixTime = '1639262400000') {
	try {
		const response = await got.get(`https://api.coinhall.org/api/v1/charts/terra/candles?bars=321&from=1639242557&interval=1m&pairAddress=terra1jxazgm67et0ce260kvrpfv50acuushpjsz2y0p&quoteAsset=uluna&to=${unixTime}`, { json: true });
		console.log(response.body)
	  } catch (error) {
		console.log(error.response.body);
	  }
}

module.exports = {
	getPoolPrices
}