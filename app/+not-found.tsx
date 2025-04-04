import {View, Text, StyleSheet} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found" }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>Go back to home screen</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff"
    }
});