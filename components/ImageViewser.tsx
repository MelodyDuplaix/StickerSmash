import {View, Text, StyleSheet} from "react-native";
import React from "react";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource,
    selectedImage?: String
}

export default function ImageViewser({imgSource, selectedImage}: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})