import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Slot, Link, router, Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            resizeMode="contain"
            className="w-[130px] h-[84px]"
            source={images.logo}
          />
          <Image
            resizeMode="contain"
            className="max-w-[380px] h-[300px]"
            source={images.cards}
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              resizeMode="contain"
              className="w-[136px] h-[15px] absolute-bottom-2-right-8"
              source={images.path}
            />
          </View>
          <Text className="text-sm  text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="continue to email"
            handlePress={() => router.push("/sighin")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={"white"} style={"light"} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
