import axios from 'axios';
import { OPENWEATHER_API } from '@env';

export function getWeather(cityName) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPENWEATHER_API}`);
}
export function getWeatherDetails(cityName) {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${OPENWEATHER_API}`);
}
