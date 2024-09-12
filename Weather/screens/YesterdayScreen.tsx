import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getWeatherStackKey} from '../App';

const WEATHERSTACK_KEY = getWeatherStackKey();
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
        const city = json['location']['name'];
        const region = json['location']['region'];
        const country = json['location']['country']
        let location = city + ", " + region + ", " + country
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
            'windgust': yesterdayData['windgust'],
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
        windgust: 0,
        location: '',
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
            <View>
                <Text style={styles.title}>Yesterday's Weather</Text>
            </View>
            
            <Text style={styles.locationName}>{weatherData.location}</Text>
            <View>
                <Image style = {styles.weatherImage} source= {{uri: weatherData.weather_icons[0]}}></Image>
            </View>
            <View style={styles.dataSection}>
                <Text style={styles.dataPoints}>Condition: {weatherData.weather_descriptions}</Text>
                <Text style={styles.dataPoints}>Temperature: {weatherData.temperature} F</Text>
                <Text style={styles.dataPoints}>Feels like: {weatherData.feelslike} F</Text>
                <Text style={styles.dataPoints}>Chance of Rain: {weatherData.chanceofrain}%</Text> 
                <Text style={styles.dataPoints}>Humidity: {weatherData.humidity}%</Text>
                <Text style={styles.dataPoints}>UV: {weatherData.uv_index}</Text>
                <Text style={styles.dataPoints}>Visiblity: {weatherData.visibility} miles</Text>
                <Text style={styles.dataPoints}>Wind direction: {weatherData.wind_dir}</Text>
                <Text style={styles.dataPoints}>Wind speed: {weatherData.wind_speed} mph</Text>
                <Text style={styles.dataPoints}>Wind gust: {weatherData.windgust} mph</Text> 
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

export default YesterdayScreen;
