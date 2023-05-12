import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";

const DetailsPage = () => {
  const router = useRouter();
  return (
    <GradientBackground>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextFont>Details</TextFont>
      </View>
    </GradientBackground>
  );
};

export default DetailsPage;
