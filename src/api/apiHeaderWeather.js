import axios from "axios";

const getWeather = axios.create({
  baseURL:
    "https://api.open-meteo.com/v1/forecast?latitude=47.8378&longitude=35.1383&current=temperature_2m",
});

export default getWeather;
