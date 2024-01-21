import  { useContext } from "react";
import { FavoriteContext } from "../store/context/fav-context";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FavFoodScreen = () => {
  const { favMeals } = useContext(FavoriteContext);


  const navigation = useNavigation();

  const foodDetailsNaviHandler = (item) => {
    navigation.navigate("MealsDetails",{
      foodItem: item,
    })

  }

  return <>
  <ScrollView>
      {favMeals.length > 0 ? (
        favMeals.map((item) => (
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
        ))
      ) : (
        <View style={styles.centerContainer}>
          <Text style={styles.centerText}>No favorite meals yet!</Text>
        </View>
      )}
    </ScrollView>
  </>
};

export default FavFoodScreen;


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

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 16, 
  },
});
