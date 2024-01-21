import {  FlatList, StyleSheet } from "react-native";
import { Category } from "../dummyData/dummy-data";
import FoodCategoriesList from "../components/FoodCategoriesList";
import { useLayoutEffect } from "react";
import CustomButton from "../components/CustomButton";
const FoodCategoriesScreen = ({ navigation }) => {
  const categoryHandlePress = (item) => {
    navigation.navigate("MealsOverview", {
      CategoryName: item.name,
    });
  };

  const favHandler = () => {
    navigation.navigate("FavScreen");
  } 

  useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => {
      return <CustomButton title="favourites" onPress={favHandler}/>
    }
  })
  }, [navigation])

  return (
    <>
      <FlatList
        data={Category}
        renderItem={({ item }) => (
          <FoodCategoriesList
            title={item.name}
            onPress={() =>  categoryHandlePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </>
  );
};

export default FoodCategoriesScreen;

const styles = StyleSheet.create({});
