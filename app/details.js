import { View, ActivityIndicator } from "react-native";
import React from "react";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";
import { useWeatherDetailsQuery } from "../src/api/weatherQueries";

const DetailsPage = () => {
  const weatherQuery = useWeatherDetailsQuery('stockholm');
  return (
    <GradientBackground>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        { weatherQuery.isLoading 
          ? <ActivityIndicator size="large" color="white" />
          : <TextFont>{JSON.stringify(weatherQuery.data)}</TextFont>
        }
      </View>
    </GradientBackground>
  );
};

export default DetailsPage;
