'use strict'

const cron = require('node-cron');
const { getPrice } = require('./start')

cron.schedule('* * * * *', function() {
	getPrice()
  });