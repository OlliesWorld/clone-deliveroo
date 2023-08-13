import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

import { getFeaturedRestaurantById } from "../api";

const FeaturedRow = ({ id, title, short_description, restaurants }) => {
  useEffect(() => {}, [id]);
  console.log("restaurants", restaurants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      {/* <Text className="text-xs text-gray-500 px-4">{description}</Text> */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {console.log(restaurants)}
        {/* {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              type={restaurant.type?.name}
              address="123 main street"
              description={restaurant.description}
              dishes={restaurant.dishes}
              lng={restaurant.lng}
              lat={restaurant.lat}
            />
          );
        })} */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
