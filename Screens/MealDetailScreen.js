import { useLayoutEffect } from "react";
import {  Image, ScrollView, StyleSheet, Text, View } from "react-native"
import IconButton from "../components/IconButton";

const MealDetailScreen = ({route,navigation}) => {
  const foodItem = route.params.foodItem;

 const saveHandler = () => {
console.log("hello b")
 }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton  onPress={saveHandler}/>
      }
    })
  }, [])

  return (
 <ScrollView style={styles.scrollContainer}>
   <View>
    <Image style={styles.image} source={foodItem.imageName} />
    <Text style={styles.title}>{foodItem.name}</Text>
    <Text style={styles.desc}>{foodItem.desc}</Text>
    <View style={styles.details}>
    <Text>{foodItem.duration}m</Text>
    <Text>{foodItem.complexity.toUpperCase()}</Text>
    <Text>{foodItem.affordability.toUpperCase()}</Text>
    </View>
    <Text style={styles.subtitle}>Ingredients</Text>
{foodItem.ingredients.map(ingredient => <Text style={styles.ingredient} key={ingredient}>{ingredient}</Text>) }
  </View>
 </ScrollView>
  )
}

export default MealDetailScreen


const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:350,
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    margin:8,
    textAlign:"center"
  },
  subtitle:{
    fontSize:18,
    fontWeight:"bold",
    margin:8,
    textAlign:"center",
  
  },
  desc:{
    margin:12,
    lineHeight:22
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-around",
  },
  ingredient:{
    margin:12,
    lineHeight:22
  },
  scrollContainer:{
  marginBottom:12
  }
});
