import { images } from "@/assets/constants/images";
import MovieCard from "@/components/MovieCard";
import SearchbarInput from "@/components/Searchbar";
import useFetch from "@/hook/useAxios/api";
import { fetchMovies } from "@/hook/useAxios/api/api";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Search() {
  const {
    data: movies,
    loading,
    error,
    refetch,
    reset,
  } = useFetch(() => fetchMovies({ query: search }), false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const func = setTimeout(async () => {
      if (search.trim()) {
        await refetch();
      } else {
        reset;
      }
    }, 1000);
    return () => clearTimeout(func);
  }, [search]);
  return (
    <View className="bg-[#0fcced] flex-1">
      <Image
        source={images.background}
        className="absolute w-full z-0 opacity-35"
      />
      <FlatList
        keyExtractor={(item) => item.id}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          gap: 20,
          justifyContent: "center",
          marginVertical: 5,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row items-center justify-center ">
              <Image
                source={images.logo}
                className="w-14 h-14 mt-20 m-auto mb-8"
              />
            </View>
            <View className="mb-5">
              <SearchbarInput
                value={search}
                placeholder="Search movies ..."
                onChangeText={(text: string) => setsearch(text)}
              />
            </View>
            {loading && <ActivityIndicator size="large" className="my-3" />}
            {error && (
              <Text className="text-[red] font-semibold">
                Error:{error.message}
              </Text>
            )}
            {!loading && !error && search.trim() && movies?.length > 0 && (
              <Text>
                Search Results for{" "}
                <Text className="text-[#f9060e8e] font-bold">{search}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View>
              <Text className="text-center text-[20px] w-full font-normal text-gray-700 ">
                {search.trim() ? "No movies found" : "Search for a movie"}
              </Text>
            </View>
          ) : null
        }
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
      />
    </View>
  );
}
