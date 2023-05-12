import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GradientBackground from "../src/components/GradientBackground";
import TextFont from "../src/components/TextFont";

const MainPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("details");
  };
  return (
    <GradientBackground>
      <TouchableOpacity onPress={handlePress}>
        <TextFont>To Details</TextFont>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default MainPage;
