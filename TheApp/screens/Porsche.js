import { View, Text, Image, StyleSheet } from "react-native";

function Porsche() {
    return (
        <View style={styles.View}>
            <View>
            <Text style={styles.Square}>911</Text>
            <Image style={styles.image} source={require("../assets/images/cars/911.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>718</Text>
            <Image style={styles.image} source={require("../assets/images/cars/718.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>Panamera</Text>
            <Image style={styles.image} source={require("../assets/images/cars/Panamera.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>Cayenne</Text>
            <Image style={styles.image} source={require("../assets/images/cars/Cayenne.jpg")}/>
            </View>
        </View>
    );
}

export default Porsche;

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