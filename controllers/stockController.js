const Stock = require('./../models/stocksModel');

exports.getStocks = async (req, res) => {
  const Buyer = req.params;
  const stocks = await Stock.find(Buyer).select('-__v');

  res.status(200).json({
    status: 'success',
    stocks,
  });
};

exports.getStock = async (req, res) => {
  let stockName = req.params.stockName.toUpperCase();
  let { Buyer } = req.params;
  // console.log(req.params);

  const specificStock = await Stock.find({ stockName, Buyer }).select('-__v');

  res.status(200).json({
    status: 'Success',
    stocks: specificStock,
  });
};

exports.createStock = async (req, res) => {
  try {
    const stock = req.body;

    await Stock.create(stock);

    res.status(201).json({
      status: 'success',
      data: stock,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err.stack,
    });
  }
};

exports.sellStocks = async (req, res) => {
  try {
    const { date, stockName, Buyer, soldQuantity, soldPricePerUnit } = req.body;

    // const specificStock = await Stock.find({ date, stockName, Buyer }).update({
    //   soldQuantity,
    //   soldPricePerUnit,
    //   profit,
    // });

    let specificStock = await Stock.find({ date, stockName, Buyer });

    specificStock = specificStock[0];

    const boughtPerEach =
      specificStock.totalCostPrice / specificStock.boughtQuantity;
    // console.log(boughtPerEach);

    // console.log(specificStock[0].soldQuantity);

    if (specificStock.soldQuantity) {
      //   console.log(specificStock.soldQuantity);
      const newSoldQuantity = specificStock.soldQuantity * 1 + soldQuantity * 1;
      let newSoldPricePerUnit =
        specificStock.soldPricePerUnit * specificStock.soldQuantity +
        soldQuantity * soldPricePerUnit;

      newSoldPricePerUnit = Math.floor(newSoldPricePerUnit / newSoldQuantity);

      const newprofit =
        specificStock.profit +
        (soldPricePerUnit - boughtPerEach) * soldQuantity;

      await Stock.findOneAndUpdate(
        { date, stockName, Buyer },
        {
          soldQuantity: newSoldQuantity,
          soldPricePerUnit: newSoldPricePerUnit,
          profit: newprofit,
        }
      );
    } else {
      const profit = (soldPricePerUnit - boughtPerEach) * soldQuantity;

      // console.log(soldPricePerUnit, boughtPerEach, profit);
      await Stock.findOneAndUpdate(
        { date, stockName, Buyer },
        {
          soldQuantity,
          soldPricePerUnit,
          profit,
        }
      );
    }
    // console.log(specificStock);

    res.status(200).json({
      status: 'Success',
      data: specificStock,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err.stack,
    });
  }
};
