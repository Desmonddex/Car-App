import { View, Image, Text, StyleSheet } from "react-native";

function Citroen() {
    return(
        <View style={styles.View}>
        <View>
        <Text style={styles.Square}>C4</Text>
        <Image style={styles.image} source={require("../assets/images/cars/C4.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>C4P</Text>
        <Image style={styles.image} source={require("../assets/images/cars/C4P.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>C5X</Text>
        <Image style={styles.image} source={require("../assets/images/cars/C5X.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>C5A</Text>
        <Image style={styles.image} source={require("../assets/images/cars/C5A.jpg")}/>
        </View>
    </View>
    );
}

export default Citroen;

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