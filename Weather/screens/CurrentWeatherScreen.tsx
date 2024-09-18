import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getWeatherStackKey} from '../App';

const WEATHERSTACK_KEY = "adsfdasfasdfads";
console.log("Current:" + WEATHERSTACK_KEY)

async function getCurrentWeather() {
    const url = new URL('http://api.weatherstack.com/current')
    url.searchParams.append('access_key', WEATHERSTACK_KEY);
    url.searchParams.append('query', '93933')

    url.searchParams.append('hourly', '1')
    url.searchParams.append('units', 'f')
    try {
        const response = await fetch(
            url
        );
        const json = await response.json();
        const city = json['location']['name'];
        const region = json['location']['region'];
        const country = json['location']['country']
        let location = city + ", " + region + ", " + country
        const data = json.current;
        console.log(data);

        return {
            'feelslike': data['feelslike'],
            'humidity': data['humidity'],
            'temperature': data['temperature'],
            'uv_index': data['uv_index'],
            'visibility' : data['visibility'],
            'weather_descriptions': data['weather_descriptions'],
            'weather_icons': data['weather_icons'],
            'wind_dir': data['wind_dir'],
            'wind_speed': data['wind_speed'],
            'location': location
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
    return {'chanceofrain': 0,
            'feelslike': 0,
            'humidity': 0,
            'temperature': 0,
            'uv_index': 0,
            'visibility' : 0,
            'weather_descriptions': [''],
            'weather_icons': ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwhite-color&psig=AOvVaw20mdQpESb5llZIbP6g2hoA&ust=1726247263634000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD_mKnyvYgDFQAAAAAdAAAAABAI'],
            'wind_dir': '',
            'wind_speed': 0,
            'windgust': 0,
            'location':''}
}

const CurrentWeatherScreen = () => {
    const [weatherData, setWeatherData] = useState({
        chanceofrain: 0,
        feelslike: 0,
        humidity: 0,
        temperature: 0,
        uv_index: 0,
        visibility: 0,
        weather_descriptions: [''],
        weather_icons: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwhite-color&psig=AOvVaw20mdQpESb5llZIbP6g2hoA&ust=1726247263634000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD_mKnyvYgDFQAAAAAdAAAAABAI'],
        wind_dir: '',
        wind_speed: 0,
        windgust: 0,
        location: '',
    });

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getCurrentWeather();
            setWeatherData(data);
        };
        fetchWeather();
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Current Weather</Text>
            </View>
            
            <Text style={styles.locationName}>{weatherData.location}</Text>
            <View>
                <Image style = {styles.weatherImage} source= {{uri: weatherData.weather_icons[0]}}></Image>
            </View>
            <View style={styles.dataSection}>
                <Text style={styles.dataPoints}>Condition: {weatherData.weather_descriptions}</Text>
                <Text style={styles.dataPoints}>Temperature: {weatherData.temperature} F</Text>
                <Text style={styles.dataPoints}>Feels like: {weatherData.feelslike} F</Text>
                <Text style={styles.dataPoints}>Humidity: {weatherData.humidity}%</Text>
                <Text style={styles.dataPoints}>UV: {weatherData.uv_index}</Text>
                <Text style={styles.dataPoints}>Visiblity: {weatherData.visibility} miles</Text>
                <Text style={styles.dataPoints}>Wind direction: {weatherData.wind_dir}</Text>
                <Text style={styles.dataPoints}>Wind speed: {weatherData.wind_speed} mph</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    title: {
        fontWeight: "bold",
        fontSize: 32,
        paddingTop: 12
    },
    locationName: {
        fontSize: 24
    },
    weatherImage: {
        width: 150, 
        height: 150,
        borderRadius: 25,
        marginTop: 10
    },
    dataPoints: {
        fontSize: 24
    },
    dataSection: {
        paddingTop: 10
    },
});

export default CurrentWeatherScreen;