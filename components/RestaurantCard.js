import { View, Text, TouchableOpacity, Image,  TouchableWithoutFeedback } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({
  id, 
  title,
  imgUrl,
  rating,
  type,
  address, 
  description,
  dishes,
  reviews,
  lng,
  lat
}) {
  const navigation = useNavigation();
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate('Restaurant', {
        id, 
        title,
        imgUrl,
        rating,
        type,
        address, 
        description,
        dishes,
        lng,
        reviews,
        lat
      })
    }}>
      <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-lg">
          <Image  className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(imgUrl).url()}} />
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1 mb-2">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-green-500'>{rating}</Text> . {genre}</Text>
        </View>
        <View className="flex-row space-x-1">
            <MapPinIcon color="gray" opacity={0.4} size={22}/>
             <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
        </View>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

