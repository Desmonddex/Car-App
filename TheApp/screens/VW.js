import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable} from "react-native";

function VW({navigation}) {
    const [width, setWidth] = useState();
    
    return (
        <View style={styles.View}>
            <View>
            <Pressable onPress={() => navigation.navigate("Golf")}>
            <Text style={styles.Square}>Golf</Text>
            <Image style={styles.image} source={require("../assets/images/cars/Golf.jpg")}/>
            </Pressable>
            </View>
            <View>
            <Text style={styles.Square}>Touran</Text>
            <Image style={styles.image} source={require("../assets/images/cars/Touran.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>Passat</Text>
            <Image style={styles.image} source={require("../assets/images/cars/Passat.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>Touareg</Text>
            <Image style={styles.image} source={require("../assets/images/cars/Touareg.jpg")}/>
            </View>
        </View>
    );
}

export default VW;

const styles = StyleSheet.create({
    View: {
        flexDirection: "row",
        flex: 1,
    },
    Square: {
        backgroundColor: 'black',
        width: 100,
        height: 25,
        justifyContent: "center",
        alignContent: "center",
        color: "white"
    },
    image: {
        width: 100,
        height: 800,
    },
    bigImage: {
        width: 500,
        height: 800,
    }
});