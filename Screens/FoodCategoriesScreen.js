import { FlatList, StyleSheet } from "react-native";
import { Category } from "../dummyData/dummy-data";
import FoodCategoriesList from "../components/FoodCategoriesList";
const FoodCategoriesScreen = () => {
  return (
    <>
      <FlatList
        data={Category}
        renderItem={({ item }) => <FoodCategoriesList title={item.name} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </>
  );
};

export default FoodCategoriesScreen;

const styles = StyleSheet.create({});
