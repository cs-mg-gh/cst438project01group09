import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';

const WEATHERSTACK_KEY = "60d4f513a2ea228a580264bbb7df7f60";

async function getCurrentWeather(cityName) {
    const url = new URL('http://api.weatherstack.com/current');
    url.searchParams.append('access_key', WEATHERSTACK_KEY);
    url.searchParams.append('query', cityName); // Use the city name passed as a parameter

    url.searchParams.append('hourly', '1');
    url.searchParams.append('units', 'f');
    
    try {
        const response = await fetch(url);
        const json = await response.json();

        if (json.error) {
            console.error('Error in weather API response:', json.error);
            return null;
        }

        const city = json['location']['name'];
        const region = json['location']['region'];
        const country = json['location']['country'];
        let location = city + ", " + region + ", " + country;
        const data = json.current;

        return {
            'feelslike': data['feelslike'],
            'humidity': data['humidity'],
            'temperature': data['temperature'],
            'uv_index': data['uv_index'],
            'visibility': data['visibility'],
            'weather_descriptions': data['weather_descriptions'],
            'weather_icons': data['weather_icons'],
            'wind_dir': data['wind_dir'],
            'wind_speed': data['wind_speed'],
            'location': location
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

const ViewCityScreen = () => {
    const route = useRoute();
    const { city } = route.params; // Retrieve the city from navigation params
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getCurrentWeather(city);
            if (data) {
                setWeatherData(data);
            }
        };
        fetchWeather();
    }, [city]);

    if (!weatherData) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Loading weather data...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Current Weather</Text>
            </View>

            <Text style={styles.locationName}>{weatherData.location}</Text>
            <View>
                <Image style={styles.weatherImage} source={{ uri: weatherData.weather_icons[0] }} />
            </View>
            <View style={styles.dataSection}>
                <Text style={styles.dataPoints}>Condition: {weatherData.weather_descriptions[0]}</Text>
                <Text style={styles.dataPoints}>Temperature: {weatherData.temperature} F</Text>
                <Text style={styles.dataPoints}>Feels like: {weatherData.feelslike} F</Text>
                <Text style={styles.dataPoints}>Humidity: {weatherData.humidity}%</Text>
                <Text style={styles.dataPoints}>UV: {weatherData.uv_index}</Text>
                <Text style={styles.dataPoints}>Visibility: {weatherData.visibility} miles</Text>
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

export default ViewCityScreen;
