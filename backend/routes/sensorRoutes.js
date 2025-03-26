const express = require("express");
const { getSensorData } = require("../controllers/sensorController");

const router = express.Router();

router.get("/SensorData", getSensorData);

module.exports = router;
