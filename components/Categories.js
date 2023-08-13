import { ScrollView, Image } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10,
    }} 
    horizontal 
    showHorizontalScrollIndicator={false}
    >

        {/* CategoryCard */}
        <CategoryCard 
        imgUrl="https://links.papareact.com/gn7"
        title='Test1'
        />
        <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title='Test2'/>
        <CategoryCard 
        imgUrl="https://links.papareact.com/wru" 
        title='Test3'/>
        <CategoryCard 
        imgUrl="https://links.papareact.com/gn7"
        title='Test1'
        />
        <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title='Test2'/>
        <CategoryCard 
        imgUrl="https://links.papareact.com/wru" 
        title='Test3'/>
        <CategoryCard 
        imgUrl="https://links.papareact.com/gn7"
        title='Test1'
        />
        <CategoryCard 
        imgUrl="https://links.papareact.com/gn7" 
        title='Test2'/>
        <CategoryCard 
        imgUrl="https://links.papareact.com/wru" 
        title='Test3'/>
        
    </ScrollView>
  );
};

export default  Categories;