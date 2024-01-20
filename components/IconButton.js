import { Pressable, StyleSheet } from "react-native"
import {Ionicons} from "@expo/vector-icons"
const IconButton = ({icon,onPress}) => {
  return (
<Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
 <Ionicons name={icon} size={24}/>
</Pressable>
 )
}

export default IconButton;


const styles = StyleSheet.create({
pressed:{
    opacity:0.4,
},
})
