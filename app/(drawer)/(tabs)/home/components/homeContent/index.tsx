import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import { categories, pets } from './data';

const HomeContent = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const allPets = Object.values(pets).flat();

  // Get the pets to display based on the selected category
  const petsToDisplay = selectedCategory ? pets[selectedCategory] : allPets;


  // Render a single category item
  const renderCategoryItem = ({ item }) => (
    <Pressable
      onPress={() => {setSelectedCategory(item.animal)}}
      className={`mr-4 p-2 border rounded-md ${selectedCategory === item.animal ? 'bg-blue-300' : 'bg-blue-100'} flex-row items-center`}
    >
      <Image source={item.image} className="w-16 h-16 mr-2 rounded-full" />
      {/* <Text className="text-lg font-bold">{item.animal}</Text> */}
    </Pressable>
  );

  // Render a single pet item
  const renderPetItem = ({ item }) => (
    <View style={styles.petItem}>
      <Text style={styles.petName}>{item.name}</Text>
      {/* <Text style={styles.petCategory}>{item.category}</Text> */}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Category List */}
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />

      {/* Pet List */}
      <FlatList
        data={petsToDisplay}
        renderItem={renderPetItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.petList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryList: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginHorizontal: 5,
  },
  selectedCategory: {
    backgroundColor: '#007bff',
  },
  categoryText: {
    color: '#333',
  },
  petList: {
    paddingHorizontal: 20,
  },
  petItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  petCategory: {
    color: '#777',
  },
});

export default HomeContent;
