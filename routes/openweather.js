const express = require("express");
const router = express.Router();
const openweatherController = require("../controllers/openweatherController");

// GET Current Weather by lat and lon
router.get("/", openweatherController.openweather_current_weather_coords);

// GET Three Hour Weather by lat and lon
router.get(
  "/forecast",
  openweatherController.openweather_forecast_weather_coords
);

// GET Current Weather by Zip
router.get("/zip", openweatherController.openweather_lon_lat_by_zip);

// GET Current Air Pollution By lat and lon
router.get(
  "/airpollution",
  openweatherController.openweather_current_airpollution
);

module.exports = router;
