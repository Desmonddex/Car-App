import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function Italy({navigation}) {
    function PressHandler() {
        navigation.navigate("Dummy")
    }
    return (
        <View>
            <Text> Italian Car Brands: </Text>
            <View style={styles.BrandContainer}>
                <Pressable android_ripple={{color: " darkslateblue "}} onPress={() => navigation.navigate("Fiat")}>
                <Image style={styles.image} source={require("../assets/images/brands/Fiat.png")}/>
                </Pressable>
             <Pressable android_ripple={{color: " darkslateblue "}}onPress={() => navigation.navigate("Alfa")}>
             <Image style={styles.image} source={require("../assets/images/brands/Alfa.png")}/>
             </Pressable>
           <Pressable android_ripple={{color: " darkslateblue "}} onPress={() => navigation.navigate("Ferrari")}>
           <Image style={styles.image} source={require("../assets/images/brands/Ferrari5.png")}/>
           </Pressable>
           
           </View>
        </View>
    );
}

export default Italy;

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