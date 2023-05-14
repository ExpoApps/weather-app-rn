import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";
import WeatherCard from "../src/components/WeatherCard";
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getWeather, getWeatherDetails } from "../src/api/weather";
import CitySelect from "../src/components/CitySelect";

const MainPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("details");
  };
  const [selectedCity, setSelectedCity] = useState('stockholm');
  const weatherQuery = useQuery({
    queryKey: [selectedCity],
    queryFn: () => getWeather(selectedCity),
  })

  const queryClient = useQueryClient()
  /*function detailsQuery() {
    queryClient.prefetchQuery({
      queryKey: ["weatherDetails"],
      queryFn: () => getWeatherDetails,
    })
  }*/
  //const { isLoading, error, data, fetchStatus, status } = weatherQuery;

  return (
    <GradientBackground>
      <WeatherCard data={weatherQuery.data} />
      <CitySelect selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <TouchableOpacity onPress={handlePress}>
        <TextFont>Forecast report</TextFont>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default MainPage;
