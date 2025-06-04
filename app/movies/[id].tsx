import { icons } from "@/assets/constants/icons";
import { images } from "@/assets/constants/images";
import useFetch from "@/hook/useAxios/api";
import { fetchMoviesDetails } from "@/hook/useAxios/api/api";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface MovieInfoProbs {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProbs) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-lime-50 font-normal text-sm">{label}</Text>
    <Text className="text-lime-50 text-sm font-bold">{value || "N/A"}</Text>
  </View>
);

const MoviesDetails = () => {
  const { id } = useLocalSearchParams();
  const { data, loading, error } = useFetch(() =>
    fetchMoviesDetails(id as string)
  );

  return (
    <View className="flex-1 bg-[#01090b]">
      <Image
        source={images.background}
        className="absolute w-full z-0 opacity-35"
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="font-bold text-[#e2e2e4]">{data?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-sm text-white">
              {data?.release_date.split("-")[0]}
            </Text>
            <Text className="text-sm text-white">{data?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-[#80808061] px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="font-bold ml-2 text-white">
              {Math.round(data?.vote_average ?? 0)} / 10
            </Text>
            <Text className="text-white">({data?.vote_count} votes)</Text>
          </View>
        </View>
        <View className="px-4">
          <MovieInfo label="Overview" value={data?.overview} />
          <MovieInfo
            label="Genres"
            value={data?.genres?.map((g: any) => g.name).join(" - ") || "N/A"}
          />
          <View className="flex flex-row justify-between w-1/2"></View>
          <MovieInfo
            label="Budget"
            value={`$${data?.budget / 1_000_000} millon`}
          />
          <MovieInfo
            label="Revenue"
            value={`$${Math.round(data?.revenue) / 1_000_000}`}
          />
          <MovieInfo
            label="Produvtion Companies"
            value={
              data?.production_companies.map((c: any) => c.name).join(" - ") ||
              "N/A"
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-5 bg-[#3c00ff] left-0 mx-5 right-0 rounded-[10px] flex items-center justify-center py-3.5 z-30  "
        onPress={router.back}
      >
        <View className="flex-row gap-4 items-center">
          <Image
            source={icons.arrow}
            className="size-5 mr-1 mt-2"
            tintColor="#fff"
          />
          <Text className="text-white font-bold text-base">Go Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MoviesDetails;
