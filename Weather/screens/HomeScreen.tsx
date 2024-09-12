import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState, version } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


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