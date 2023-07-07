import { View, Text, StyleSheet, Button, Image } from "react-native";

function MainScreen({atPress, navigation}) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.secondContainer}>
                <Button title="Germany" onPress={() => navigation.navigate("Germany")}/>
                <Image style={styles.image} source={require("../assets/images/countries/Germany.png")}/>
            </View>
            <View style={styles.secondContainer}>
                <Button title="France" onPress={() => navigation.navigate("France")}/>
                <Image style={styles.image} source={require("../assets/images/countries/France.png")}/>
            </View>
            <View style={styles.secondContainer}>
                <Button title="Italy" onPress={() => navigation.navigate("Italy")}/>
                <Image style={styles.image} source={require("../assets/images/countries/Italy.png")}/>
            </View>
        </View>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    rootContainer: {
      backgroundColor: "grey",
      flex: 1
    },
    text: {
        color: "white"
    },
    secondContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#4599FE",
        borderRadius: 36,
        paddingHorizontal: 20,
        marginHorizontal: 20,

    },
    image: {
        width: 60,
        height: 35
    }
});