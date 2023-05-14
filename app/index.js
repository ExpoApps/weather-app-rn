import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";
import axios from 'axios';
import WeatherCard from "../src/components/WeatherCard";
import Constants from 'expo-constants';
import { OPENWEATHER_API } from '@env';

const MainPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("details");
  };
  async function getWeather() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${OPENWEATHER_API}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getWeather();

  return (
    <GradientBackground>
      <WeatherCard />
      <TouchableOpacity onPress={handlePress}>
        <TextFont>Forecast report</TextFont>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default MainPage;
