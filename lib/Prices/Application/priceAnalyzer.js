'use strict'

const { getPoolPrices } = require('../../common/api.coinhall')

async function isPriceSuitable(wantedPrice) {
	let prices = await getPoolPrices()

	let price = prices[0].open

	if (price <= wantedPrice) {
		return {'result':true, 'price':price}
	} else {
		return {'result':false, 'price':price}
	}
}

module.exports = {
	isPriceSuitable
}