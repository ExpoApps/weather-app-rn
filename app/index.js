import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";
import WeatherCard from "../src/components/WeatherCard";
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getWeather, getWeatherDetails } from "../src/api/weather";

const MainPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("details");
  };
  const weatherQuery = useQuery({
    queryKey: ["currentWeather"],
    queryFn: () => getWeather,
  })
  const queryClient = useQueryClient()
  function detailsQuery() {
    queryClient.prefetchQuery({
      queryKey: ["weatherDetails"],
      queryFn: () => getWeatherDetails,
    })
  }
  //console.log(weatherQuery.fetchStatus, weatherQuery.status);

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
