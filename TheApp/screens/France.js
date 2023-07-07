import { View, Text, StyleSheet, Image, Pressable } from "react-native";


function France({navigation}) {
  function PressHandler() {
    navigation.navigate("Dummy")
}
  return (
    <View>
        <Text>French Car Brands: </Text>
        <View style={styles.BrandContainer}>
          <Pressable android_ripple={{color: " darkslateblue "}}  onPress={() => navigation.navigate("Peugeot")} >
          <Image style={styles.image} source={require("../assets/images/brands/Peugeot.png")}/>
          </Pressable>
            <Pressable android_ripple={{color: " darkslateblue "}}  onPress={() => navigation.navigate("Renault")} >
            <Image style={styles.image} source={require("../assets/images/brands/Renault.png")}/>
            </Pressable>
           <Pressable android_ripple={{color: " darkslateblue "}} onPress={() => navigation.navigate("Citroen")}>
           <Image style={styles.image} source={require("../assets/images/brands/Citroen.png")}/>
           </Pressable>
          
           </View>
    </View>
  );
}

export default France;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60
},
BrandContainer: {
    flexDirection: "row",
   justifyContent: "space-between"
}
});