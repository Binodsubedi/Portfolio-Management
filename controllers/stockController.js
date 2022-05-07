const Stock = require('./../models/stocksModel');

exports.getStocks = async (req, res) => {
  const stocks = await Stock.find();

  res.status(200).json({
    status: 'success',
    stocks,
  });
};
