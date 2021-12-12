'use strict'
const { isPriceSuitable } = require('../lib/Prices/Application/priceAnalyzer')

async function getPrice() {
	let result = await isPriceSuitable(0.95)
	console.log(result)
}

getPrice()

module.exports = {
	getPrice
}