import { images } from "@/assets/constants/images";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/hook/useAxios/api";
import { fetchMovies } from "@/hook/useAxios/api/api";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-[#69ebff]">
      <Image
        source={images.background}
        className="absolute w-full z-0 opacity-35"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={images.logo} className="w-14 h-[50] mb-5 m-auto mt-20" />

        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : error ? (
          <Text>{error?.message}</Text>
        ) : (
          <View className="flex-1 mt-6">
            <>
              <Text className="mt-3 text-lg mb-4 font-bold text-[#09215d]">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
                renderItem={({ item }) => <MovieCard {...item} />}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
