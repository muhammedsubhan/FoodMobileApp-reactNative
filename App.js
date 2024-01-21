import { Button, StyleSheet } from "react-native";
import FoodCategoriesScreen from "./Screens/FoodCategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./Screens/MealsOverViewScreen";
import MealDetailScreen from "./Screens/MealDetailScreen";
import FavoriteContextProvider from "./store/context/fav-context";
import FavFoodScreen from "./Screens/FavFoodScreen";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar style="dark" />
       <FavoriteContextProvider>
      <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={FoodCategoriesScreen}
           
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
          <Stack.Screen name="MealsDetails" component={MealDetailScreen} />
          <Stack.Screen name="FavScreen" component={FavFoodScreen} />
        </Stack.Navigator>
      </NavigationContainer>
       </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
