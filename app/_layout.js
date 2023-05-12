import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="details"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: (props) => (
            <Text>{"< Back"}</Text>
          ),
        }}
      ></Stack.Screen>
      </Stack>
  );
}
