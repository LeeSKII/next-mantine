import mongoose from "mongoose";

let WeatherSchema = new mongoose.Schema({
  spider_time: String,
  query_time: String,
  weeklyWeatherArr: Array,
  hourWeather: Array,
});

export default mongoose.models.Weather ||
  mongoose.model("Weather", WeatherSchema);
