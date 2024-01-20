import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FoodDetails = ({ item }) => {
  const navigation = useNavigation();

  const foodDetailsNaviHandler = (item) => {
    navigation.navigate("MealsDetails",{
      foodItem: item,
    })

  }

  return (
    <>
      {item.item.foods.map((item) => {
        return (
          <View key={item.foodId} style={styles.mealItem}>
            <Pressable
            onPress={() => foodDetailsNaviHandler(item)}
              android_ripple={{ color: "#ccc" }}
              style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
            >
              <View style={styles.innerContainer}>
                <View>
                  <Image style={styles.image} source={item.imageName} />
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View style={styles.details}>
                  <Text>{item.duration}m</Text>
                  <Text>{item.complexity.toUpperCase()}</Text>
                  <Text>{item.affordability.toUpperCase()}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        );
      })}
    </>
  );
};

export default FoodDetails;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-around",
  },
});
