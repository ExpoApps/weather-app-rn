import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const MainPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("details");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handlePress}>
        <Text>To Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainPage;
