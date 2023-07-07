import { View, Image, Text, StyleSheet } from "react-native";

function Renault() {
    return(
        <View style={styles.View}>
        <View>
        <Text style={styles.Square}>Megane</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Megane.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>Scenic</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Scenic.jpeg")}/>
        </View>
        <View>
        <Text style={styles.Square}>Talisman</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Talisman.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>Arkana</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Arkana.jpg")}/>
        </View>
    </View>
    );
}

export default Renault;

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