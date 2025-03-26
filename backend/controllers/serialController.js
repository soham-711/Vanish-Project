// const { SerialPort } = require("serialport");
// const { ReadlineParser } = require("@serialport/parser-readline");
// const SensorData = require("../models/SensorData");
// const port = new SerialPort({
//   path: "COM3", // Make sure this matches your Arduino port
//   baudRate: 9600,
// });

// const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

// port.on("open", () => {
//   console.log("Serial Port Opened on COM3");
// });

// parser.on("data", (line) => {
//   try {
//     // Parse the incoming data as JSON

//     const sensorData = JSON.parse(line.trim()); // Use 'sensorData' instead of 'SensorData'
   
  
//     console.log("Received Sensor Data:", sensorData);
    
//     // Here, you can store the sensorData in MongoDB
//   } catch (error) {
//     console.error("Error parsing JSON:", error.message);
//   }
// });

// port.on("error", (err) => {
//   console.error("Error: ", err.message);
// });


const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// ✅ Global variable to store latest sensor data
let latestSensorData = { gas: 0, flame: 1 }; // Default values

const port = new SerialPort({
  path: "COM3", // Update as needed
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

port.on("open", () => {
  console.log("✅ Serial Port Opened on COM3");
});

parser.on("data", (line) => {
  try {
    const sensorData = JSON.parse(line.trim());
    console.log("📡 Received Sensor Data:", sensorData);

    // ✅ Store the latest sensor data in memory
    latestSensorData = sensorData;
  } catch (error) {
    console.error("❌ Error parsing JSON:", error.message);
  }
});

port.on("error", (err) => {
  console.error("❌ Serial Port Error:", err.message);
});

// ✅ Export latestSensorData so other files can access it
module.exports = { getLatestSensorData: () => latestSensorData };
