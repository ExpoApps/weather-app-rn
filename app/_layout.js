import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();
  const handlePress = () => {
    router.back();
  };
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
            <Pressable onPress={handlePress}>
              <Text>{"< Back"}</Text>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      </Stack>
  );
}
