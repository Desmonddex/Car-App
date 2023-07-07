import { View, Text, Image, StyleSheet } from "react-native";

function Peugeot() {
    return (
        <View style={styles.View}>
        <View>
        <Text style={styles.Square}>308</Text>
        <Image style={styles.image} source={require("../assets/images/cars/308.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>3008</Text>
        <Image style={styles.image} source={require("../assets/images/cars/3008.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>508</Text>
        <Image style={styles.image} source={require("../assets/images/cars/508.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>5008</Text>
        <Image style={styles.image} source={require("../assets/images/cars/5008.jpg")}/>
        </View>
    </View>
    );
}

export default Peugeot;

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
    }
});