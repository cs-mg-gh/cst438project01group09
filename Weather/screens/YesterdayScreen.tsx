import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getWeatherStackKey} from '../App';

// const WEATHERSTACK_KEY = getWeatherStackKey();
const WEATHERSTACK_KEY =  "6fd6bf9dd9760cacf7dbd8c105714760"
console.log("Yesterday:" + WEATHERSTACK_KEY)

async function getYesterdayWeather() {
    const url = new URL('http://api.weatherstack.com/historical')
    url.searchParams.append('access_key', WEATHERSTACK_KEY);
    url.searchParams.append('query', '93933')

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let day = (yesterday.getDate()).toString();
    if (day.length == 1) {
        day = '0' + day.toString()
    }
    let month = (yesterday.getMonth() + 1).toString();
    if (month.length == 1) {
        month = '0' + month.toString()
    }
    const year = yesterday.getFullYear();
    const formattedYesterday = year + "-" + month + "-" + day;
    const currentTime = today.getHours();
    const formattedTime = Math.floor(currentTime / 3)

    url.searchParams.append('historical_date', formattedYesterday)
    url.searchParams.append('hourly', '1')
    url.searchParams.append('units', 'f')
    try {
        const response = await fetch(
            url
        );
        const json = await response.json();
        const yesterdayData = json.historical[formattedYesterday]['hourly'][formattedTime]

        return {
            'chanceofrain': yesterdayData['chanceofrain'],
            'feelslike': yesterdayData['feelslike'],
            'humidity': yesterdayData['humidity'],
            'temperature': yesterdayData['temperature'],
            'uv_index': yesterdayData['uv_index'],
            'visibility' : yesterdayData['visibility'],
            'weather_descriptions': yesterdayData['weather_descriptions'],
            'weather_icons': yesterdayData['weather_icons'],
            'wind_dir': yesterdayData['wind_dir'],
            'wind_speed': yesterdayData['wind_speed'],
            'windgust': yesterdayData['windgust']
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
            'windgust': 0}
}

const YesterdayScreen = () => {
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
        windgust: 0
    });

    useEffect(() => {
        // Automatically fetch weather data when component mounts
        const fetchWeather = async () => {
            const data = await getYesterdayWeather();
            setWeatherData(data);
        };
        fetchWeather();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Yesterday's Weather!</Text>
            <View>
                <Image style = {{width: 100, height: 100}} source= {{uri: weatherData.weather_icons[0]}}></Image>
            </View>
            <Text>Temperature: {weatherData.temperature}</Text> 
            <Text>UV: {weatherData.uv_index}</Text>
            <Text>Wind speed: {weatherData.wind_speed}</Text>
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
