const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  month: { type: String, required: true },
  'Spinning': { type: Number, required: true },
  'Transportation': { type: Number, required: true },
  'Carding': { type: Number, required: true },
  'HeatingandCooling': { type: Number, required: true }
});

const BarChartData = mongoose.model('barchartdatamn', dataSchema);

module.exports = BarChartData;
