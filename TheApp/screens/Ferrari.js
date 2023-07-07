import { View, Text, Image, StyleSheet } from "react-native";

function Ferrari() {
    return(
        <View style={styles.View}>
        <View>
        <Text style={styles.Square}>458</Text>
        <Image style={styles.image} source={require("../assets/images/cars/458.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>288</Text>
        <Image style={styles.image} source={require("../assets/images/cars/288.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>296</Text>
        <Image style={styles.image} source={require("../assets/images/cars/296.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>LF</Text>
        <Image style={styles.image} source={require("../assets/images/cars/LF.jpg")}/>
        </View>
    </View>
    );
}

export default Ferrari;

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