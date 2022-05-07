const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  stockName: {
    type: String,
    // unique: [true, 'please use same stock for transaction management'],
    require: [true, 'please provide a name as title or name of stock'],
  },
  Buyer: {
    type: String,
    require: [true, 'please provide a name of buyer'],
  },
  boughtQuantity: {
    type: Number,
    required: [true, 'Please provide number of shares bought'],
  },
  date: {
    type: Date,
  },
  soldQuantity: Number,
  totalCostPrice: {
    type: Number,
    required: [true, 'please provide total cost of the stake'],
  },
  soldPricePerUnit: Number,
  profit: {
    type: Number,
    default: 0,
  },
});

stockSchema.pre('save', async function (next) {
  this.date = new Date().toLocaleString();
  this.stockName = this.stockName.toUpperCase();
  next();
});

const Stock = mongoose.model('stocks', stockSchema);

module.exports = Stock;
