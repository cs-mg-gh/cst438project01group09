import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, version } from 'react';


const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Welcome to the Home Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default HomeScreen;