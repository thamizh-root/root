import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  console.log("loading index.tsx...");
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
    <Text>Hello World!</Text>
    </SafeAreaView>
  );
}