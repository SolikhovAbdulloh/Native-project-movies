import { icons } from "@/assets/constants/icons";
import { Tabs } from "expo-router";
import React from "react";

import { Image, ImageBackground, Text, View } from "react-native";

const Tabicon = ({ title, focused, icons }: any) => {
  if (focused) {
    return (
      <View>
        <ImageBackground className="bg-[#87ccfa] w-[90px] h-[80px] flex items-center justify-center rounded-full">
          <Image className="size-6 mt-2" source={icons} />
          <Text className="text-xs mt-1 font-bold">{title}</Text>
        </ImageBackground>
      </View>
    );
  }
  return (
    <View className="size-full justify-center items-center  ">
      <Image source={icons} tintColor="#A8b5db" className="size-6 mt-1" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#1f57f1",
          borderRadius: 40,
          marginHorizontal: 30,
          marginBottom: 36,
          height: 54,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#000000",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon focused={focused} icons={icons.home} title={"Home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon focused={focused} icons={icons.search} title={"Search"} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon focused={focused} icons={icons.save} title={"Saved"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Tabicon focused={focused} icons={icons.user} title={"Profile"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
