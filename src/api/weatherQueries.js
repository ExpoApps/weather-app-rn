import { useQuery } from "@tanstack/react-query";
import { getWeather, getWeatherDetails } from "./getWeather";

export const useWeatherQuery = (selectedCity) => {
  return useQuery({
    queryKey: [selectedCity],
    queryFn: () => getWeather(selectedCity),
  });
};

export const useWeatherDetailsQuery = (selectedCity) => {
  return useQuery({
    queryKey: [selectedCity + "Details"],
    queryFn: () => getWeatherDetails(selectedCity),
  });
};