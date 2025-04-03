import {View, Text, StyleSheet} from "react-native";
import React from "react";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>about</Text>
        </View>
    )
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff"
    }
});