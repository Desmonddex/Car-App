import { View, Text, Image, StyleSheet } from "react-native";

function Alfa() {
    return(
        <View style={styles.View}>
        <View>
        <Text style={styles.Square}>Giulia</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Giulia.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>4C</Text>
        <Image style={styles.image} source={require("../assets/images/cars/4C.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>GiuliaS</Text>
        <Image style={styles.image} source={require("../assets/images/cars/GiuliaS.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>Stelvio</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Stelvio.jpeg")}/>
        </View>
    </View>
    );
}

export default Alfa;

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