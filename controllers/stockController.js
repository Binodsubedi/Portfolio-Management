const Stock = require('./../models/stocksModel');

exports.getStocks = async (req, res) => {
  const stocks = await Stock.find().select('-__v');

  res.status(200).json({
    status: 'success',
    stocks,
  });
};

exports.getStock = async (req, res) => {
  let stockName = req.params.name.toUpperCase();

  const specificStock = await Stock.find({ stockName }).select('-__v');

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
    const { date, stockName, Buyer, soldQuantity, soldPricePerUnit, profit } =
      req.body;

    // const specificStock = await Stock.find({ date, stockName, Buyer }).update({
    //   soldQuantity,
    //   soldPricePerUnit,
    //   profit,
    // });

    let specificStock = await Stock.find({ date, stockName, Buyer });

    specificStock = specificStock[0];

    // console.log(specificStock[0].soldQuantity);

    if (specificStock.soldQuantity) {
      //   console.log(specificStock.soldQuantity);
      const newSoldQuantity = specificStock.soldQuantity + soldQuantity;
      const newSoldPricePerUnit = Math.floor(
        (specificStock.soldPricePerUnit + soldPricePerUnit) / newSoldQuantity
      );
      const newprofit = specificStock.profit + profit;

      await Stock.findOneAndUpdate(
        { date, stockName, Buyer },
        {
          soldQuantity: newSoldQuantity,
          soldPricePerUnit: newSoldPricePerUnit,
          profit: newprofit,
        }
      );
    } else {
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
