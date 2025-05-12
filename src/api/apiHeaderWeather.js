import axios from "axios";

const axiosWeather = axios.create({
  baseURL:
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=wind_speed_10m,temperature_2m&current=wind_speed_10m,temperature_2m",
});

export default axiosWeather;
