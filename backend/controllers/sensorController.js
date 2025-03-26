// const SensorData = require("../models/SensorData");

// exports.getSensorData = async (req, res) => {
//   try {
//     const sensorData = await SensorData.find()
//       .sort({ timestamp: -1 })
//       .limit(10);
//       console.log("hello")
//  console.log(sensorData)
//     return res.status(200).json(sensorData);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// };


const { getLatestSensorData } = require("../controllers/serialController");

// ✅ Send the latest sensor data when requested
exports.getSensorData = async (req, res) => {
  try {
    const sensorData = getLatestSensorData(); // Fetch latest values from memory
    return res.status(200).json(sensorData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
