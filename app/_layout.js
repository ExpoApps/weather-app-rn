import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import TextFont from "../src/components/TextFont";

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
          headerTransparent: true,
          headerShadowVisible: false,
          headerLeft: (props) => (
            <Pressable onPress={handlePress}>
              <TextFont>{"< Back"}</TextFont>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      </Stack>
  );
}
