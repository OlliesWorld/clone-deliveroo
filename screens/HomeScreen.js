import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
// import client from '../sanity.js'
import { getFeaturedRestaurants } from "../api";
const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  useEffect(() => {
    getFeaturedRestaurants().then((data) => {
      setFeaturedCategories(data);
    });
  }, []);

  // console.log('feature', featuredCategories)
  return (
    <SafeAreaView className="bg-white pt-2">
      <View className="flex-row mx-2 pb-2 items-center  space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* ScrollView */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyles={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* FeaturedRow */}

        <View className="mt-5">
          {featuredCategories?.map((category) => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                restaurants={category?.restaurants}
                description={category.description}
                featuredCategory={category._type}
              />
            );
          })}
        </View>
        {/* <FeaturedRow 
      id="12"
      title="Featured"
      // title={featuredCategories[0].restaurants[0].name}
      description={featuredCategories.short_description}
      featuredCategory="featured"
      /> */}
        <FeaturedRow
          id="23"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory="discounts"
        />
        {/* <FeaturedRow 
       id="34"
      title="Offers near you!"
      description="Why not support your local restaurnts tonight"
      featuredCategory="offers"
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
