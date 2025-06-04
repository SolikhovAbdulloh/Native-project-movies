import { icons } from "@/assets/constants/icons";
import { images } from "@/assets/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function saved() {
  return (
    <View className="bg-[#0dcbc8b3] items-center justify-center h-full flex-1">
      <Image
        source={images.background}
        className="absolute w-full z-0 opacity-35"
      />
      <Image source={icons.save} className="size-5" />
      <Text>saved</Text>
    </View>
  );
}
