import { View, Text, Image, StyleSheet } from "react-native";

function Fiat() {
    return(
        <View style={styles.View}>
        <View>
        <Text style={styles.Square}>Panda</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Panda.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>500L</Text>
        <Image style={styles.image} source={require("../assets/images/cars/500L.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>TipoS</Text>
        <Image style={styles.image} source={require("../assets/images/cars/TipoS.jpg")}/>
        </View>
        <View>
        <Text style={styles.Square}>Tipo</Text>
        <Image style={styles.image} source={require("../assets/images/cars/Tipo.jpg")}/>
        </View>
    </View>
    );
}

export default Fiat;

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