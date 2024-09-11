import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import {getYesterdayWeather} from '../App';

const YesterdayScreen = () => {

    const [minTemp, setMinTemp] = useState(0);
    const [avgTemp, setAvgTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Welcome to the Yesterday Screen!</Text>
            <View style={styles.yesterdayButton}>
            <TouchableOpacity onPress={getYesterdayWeather}>
                <Text style={styles.buttonText}>Get Weather</Text>
            </TouchableOpacity>
            </View>
            <Text>{minTemp}</Text> 
            <Text>{avgTemp}</Text>
            <Text>{maxTemp}</Text>
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

export default YesterdayScreen;
