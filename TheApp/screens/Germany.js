import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function Germany({navigation}) {
    function PressHandler() {
        navigation.navigate("Mercedes")
    }
    return (
        <View>
           <Text >German Car Brands: </Text>
           <View style={styles.BrandContainer}>
            <Pressable android_ripple={{color: " darkslateblue "}}  onPress={() => navigation.navigate("VW")}>
            <Image style={styles.image} source={require("../assets/images/brands/VW.png")}/>
            </Pressable>
            <Pressable android_ripple={{color: " darkslateblue "}} onPress={PressHandler}>
            <Image style={styles.image} source={require("../assets/images/brands/Mercedes.png")}/>
            </Pressable>
           <Pressable android_ripple={{color: " darkslateblue "}}  onPress={() => navigation.navigate("Porsche")}>
           <Image style={styles.image} source={require("../assets/images/brands/Porsche.png")}/>
           </Pressable>
    
           </View>
          
        </View>
    );
}

export default Germany;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 8
        },
        image: {
            width: 60,
            height: 60
        },
        BrandContainer: {
            flexDirection: "row",
           justifyContent: "space-between"
        },
        Press: {
            opacity: 0.95
        }
});