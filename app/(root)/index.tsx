import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }: any) => (
  <View style={{}}>
    <Text style={{}}>{title}</Text>
  </View>
);

export default function Index() {
  console.log("hey");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex flex-column justify-center items-start h-[80px] pl-[20px]">
          <Text className="text-2xl font-JakartaExtraBold">Good Morning,</Text>
          <Text>Pierre Beshukov</Text>
        </View>

{/** top navigation to choose date */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 100,
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 90,
              width: 70,
              backgroundColor: "#868686",
              marginLeft: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 900 }}>27</Text>
            <Text>Mon</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 90,
              width: 70,
              backgroundColor: "#868686",
              marginLeft: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 900 }}>28</Text>
            <Text>Tue</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 90,
              width: 70,
              backgroundColor: "#868686",
              marginLeft: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 900 }}>29</Text>
            <Text>Wed</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 90,
              width: 70,
              backgroundColor: "#868686",
              marginLeft: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 900 }}>30</Text>
            <Text>Thr</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 90,
              width: 70,
              backgroundColor: "#868686",
              marginLeft: 20,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 900 }}>31</Text>
            <Text>Fri</Text>
          </View>
        </View>

{/** based on date show tasks here */}

        <View className="flex flex-row flex-wrap ml-[20px] gap-[10] mt-[20px]">

          <View className="h-[140px] w-[210px] bg-blue-500 rounded-lg"></View>
          <View className="h-[140px] w-[210px] bg-blue-500 rounded-lg"></View>
          <View className="h-[140px] w-[210px] bg-blue-500 rounded-lg"></View>
          <View className="h-[140px] w-[210px] bg-blue-500 rounded-lg"></View>
          <View className="h-[140px] w-[210px] bg-blue-500 rounded-lg"></View>
          <View className="h-[140px] w-[210px] bg-blue-500 rounded-lg"></View>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
