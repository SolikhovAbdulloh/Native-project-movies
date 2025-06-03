import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const MoviesDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>MoviesDetails : {id}</Text>
    </View>
  );
};

export default MoviesDetails;
