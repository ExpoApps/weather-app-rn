import React, { useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";
import WeatherCard from "../src/components/WeatherCard";
import CitySelect from "../src/components/CitySelect";
import { useWeatherQuery } from "../src/api/weatherQueries";

const MainPage = () => {
  const [selectedCity, setSelectedCity] = useState('stockholm');
  const router = useRouter();
  const handlePress = () => {
    router.push({
      pathname: "details", 
      params: {
        cityName: selectedCity,
      }});
  };
  const weatherQuery = useWeatherQuery(selectedCity);
  //const { isLoading, error, data, fetchStatus, status } = weatherQuery;

  return (
    <GradientBackground>
      <WeatherCard data={weatherQuery.data} isLoading={weatherQuery.isLoading} />
      <CitySelect selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <TouchableOpacity onPress={handlePress}>
        <TextFont>Forecast report</TextFont>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default MainPage;
