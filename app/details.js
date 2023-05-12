import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const DetailsPage = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details</Text>
    </View>
  );
};

export default DetailsPage;
