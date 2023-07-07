import { View, Text, StyleSheet, Image } from "react-native";

function Mercedes() {
    return(
        <View style={styles.View}>
            <View>
            <Text style={styles.Square}>A Class</Text>
            <Image style={styles.image} source={require("../assets/images/cars/A.jpg")}/>
            </View>
            <View>
             <Text style={styles.Square}>B Class</Text>
             <Image style={styles.image} source={require("../assets/images/cars/B.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>C Class</Text>
            <Image style={styles.image} source={require("../assets/images/cars/C.jpg")}/>
            </View>
            <View>
            <Text style={styles.Square}>GL Class</Text>
            <Image style={styles.image} source={require("../assets/images/cars/GL.jpg")}/>
            </View>
            
        </View>
    );
}

export default Mercedes;

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