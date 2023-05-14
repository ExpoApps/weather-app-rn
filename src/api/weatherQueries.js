import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./getWeather";

export const useWeatherQuery = (selectedCity) => {
  return useQuery({
    queryKey: [selectedCity],
    queryFn: () => getWeather(selectedCity),
  });
};