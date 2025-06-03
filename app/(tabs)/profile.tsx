import { images } from "@/assets/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function profile() {
  return (
    <View className="bg-[#ff9a68] items-center justify-center h-full flex-1">
      <Image
        source={images.background}
        className="absolute w-full z-0 opacity-35"
      />
      <Text>profile</Text>
    </View>
  );
}
