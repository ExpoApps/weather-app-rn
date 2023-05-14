import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import TextFont from "../src/components/TextFont";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";

export default function RootLayout() {
  const router = useRouter();
  const handlePress = () => {
    router.back();
  };
  const queryClient = new QueryClient({ 
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 10,
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
