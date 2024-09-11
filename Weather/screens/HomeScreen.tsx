import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    const YesterdayButton = () =>{
        navigation.navigate('Yesterday');
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to the Home Screen!</Text>
            <View style={styles.yesterdayButton}>
            <TouchableOpacity onPress={YesterdayButton}>
                <Text style={styles.buttonText}>Yesterday's Weather</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    yesterdayButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: 200, 
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16, 
    },
});

export default HomeScreen;
