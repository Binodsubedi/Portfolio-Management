const express = require('express');
const router = express.Router();

const stockController = require('./../controllers/stockController');

router.route('/').get(stockController.getStocks);

router.route('/:name').get(stockController.getStock);

router.route('/createTransaction').post(stockController.createStock);

router.route('/sellStock').post(stockController.sellStocks);

module.exports = router;
