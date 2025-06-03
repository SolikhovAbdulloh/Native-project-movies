import { icons } from "@/assets/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
}: any) {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
          source={{
            uri: poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
        />
        <Text numberOfLines={1} className="font-bold text-sm text-[#0e0f01]">
          {title}
        </Text>
        <View>
          <View className="flex-row gap-1">
            <Image source={icons.star} className="size-4" />
            <Text className="text-xs font-bold uppercase">
              {Math.round(vote_average / 2)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between"></View>
          <Text className="font-medium mt-2 text-light ">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
