import { icons } from "@/assets/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}
const SearchbarInput = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row bg-[#07dcec]  items-center rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-6"
        resizeMode="contain"
        tintColor="#000000"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2"
      />
    </View>
  );
};

export default SearchbarInput;
