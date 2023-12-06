import { Text } from "react-native";

const FoodDetails = ({ item }) => {
  return (
    <>
      {item.item.foods.map((item) => {
        return <Text key={item.foodId}>{item.name}</Text>;
      })}
    </>
  );
};

export default FoodDetails;
