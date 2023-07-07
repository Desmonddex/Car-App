import { View, Image, StyleSheet, Text } from "react-native";


function Template({price, engines, space, fuels, tank}) {
  return(
    <View >
        <Image style={styles.image} source={require("../assets/images/cars/Golf.jpg")}/>
        <Text>Price: {price}</Text>
        <Text>Motorisation:{engines}</Text>
        <Text>Space:{space}</Text>
        <Text>Fuels:{fuels}</Text>
        <Text>Capacity:{tank}</Text>
    </View>
  );
}

export default Template;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 250,
    resizeMode: "stretch"
  }
});