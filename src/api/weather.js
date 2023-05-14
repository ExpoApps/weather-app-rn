import axios from 'axios';
import { OPENWEATHER_API } from '@env';

export function getWeather() {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${OPENWEATHER_API}`);
}
export function getWeatherDetails() {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${OPENWEATHER_API}`);
}
