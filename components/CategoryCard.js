import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  
  return (
    <TouchableOpacity className="relative mr-4">
      <Image source={{ uri: imgUrl }} style={{width: 80, height: 80}} resizeMode={'cover'} className="w-24 h-24 rounded" />

      <Text className="absolute bottom-0 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
