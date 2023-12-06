import { FlatList, Text, View } from "react-native";
import { Meals } from "../dummyData/Meals-data";
import FoodDetails from "../components/FoodDetails";

const MealsOverViewScreen = ({ route }) => {
  const categoryName = route.params.CategoryName;

  const newMeals = Meals.filter((meal) => meal.category === categoryName);
  return (
    <>
      <View>
        <Text>Meals OverView Screen</Text>
        <FlatList
          data={newMeals}
          renderItem={(item) => <FoodDetails item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default MealsOverViewScreen;
