import FoodList from "../components/FoodList/FoodList";
import { Meals } from "../dummyData/Meals-data";

const MealsOverViewScreen = ({ route }) => {
  const categoryName = route.params.CategoryName;

  const newMeals = Meals.filter((meal) => meal.category === categoryName);
  return (
    <>
    <FoodList newMeals={newMeals}/>
    </>
  );
};

export default MealsOverViewScreen;

