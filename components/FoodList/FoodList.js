import { FlatList, View } from "react-native";
import FoodDetails from "../FoodDetails";

const FoodList = ({newMeals}) => {
    return (
        <>
          <View>
            <FlatList
              data={newMeals}
              renderItem={(item) => <FoodDetails item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      );
    };

export default FoodList