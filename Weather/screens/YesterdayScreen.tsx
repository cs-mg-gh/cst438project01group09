import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";



const YesterdayScreen = () => {
    const [minTemp, setMinTemp] = useState(0);
    const [avgTemp, setAvgTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);

    const getYesterdayWeather = async () => {
        // const url = new URL('https://api.tomorrow.io/v4/weather/forecast?location=93933&apikey=eqRPyaC9AdwCuN1CxlCGBrD2avDRR5ef&units=imperial')
    
        // try {
        //     const response = await fetch(
        //         url
        //     );
        //     const json = await response.json();

        //     if (json && json.timelines) {
        //         const { daily, hourly, minutely } = json.timelines;

        //         console.log(daily[0]);
                
        //         if (daily && daily.length > 0) {
        //             console.log('First Day\'s Data:', daily[0]);
        //         }

        //         for (let i = 0; i < daily.length; i++) {
        //             console.log(daily[i]['time'])
        //         }
        //         const temperatures = [daily[0]['values']['temperatureMin'], 
        //                               daily[0]['values']['temperatureAvg'], 
        //                               daily[0]['values']['temperatureMax']];
    
        //         setMinTemp(temperatures[0])
        //         setAvgTemp(temperatures[1])
        //         setMaxTemp(temperatures[2])
        //         return temperatures;
        //     } else {
        //         console.warn('No timelines data found in response.');
        //         return null;
        //     }
        // } catch (error) {
        //     console.error('Error fetching weather data:', error);
        // }

        const url = new URL('http://api.weatherstack.com/current')
        url.searchParams.append('access_key', '79e6a564b3a1b4a40faaa8c54bb76100');
        url.searchParams.append('query', '93933')

        try {
            const response = await fetch(
                url
            );
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

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
