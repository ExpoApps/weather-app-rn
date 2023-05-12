import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";
import axios from 'axios';

const MainPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("details");
  };
  const apiKey = process.env.OPENWEATHER_API;
  async function getWeather() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getWeather();

  return (
    <GradientBackground>
      <TouchableOpacity onPress={handlePress}>
        <TextFont>To Details</TextFont>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default MainPage;
