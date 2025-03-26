const mongoose = require("mongoose");

const SensorDataSchema = new mongoose.Schema({
  gas: { type: Number, required: true },
  flame: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now, expires: 1 }
});

module.exports = mongoose.model("SensorData", SensorDataSchema);
