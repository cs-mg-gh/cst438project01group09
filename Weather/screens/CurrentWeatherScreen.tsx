import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, TextInput, Button } from 'react-native';
import React, {useState, useEffect, useCallback, useContext } from 'react';
import {getWeatherStackKey} from '../App';
import { getFavCities, getId } from '../db-folder/db-service';
import { UserContext } from '../UserContext';
import { Picker } from '@react-native-picker/picker';

const WEATHERSTACK_KEY = "1f82af4eb8bc73b81ec040400d969726";

async function getCurrentWeather(zipCode: string) {
    const url = new URL('http://api.weatherstack.com/current')
    url.searchParams.append('access_key', WEATHERSTACK_KEY);
    if(zipCode == ""){
        url.searchParams.append('query', "93955");
    }else{
        url.searchParams.append('query', zipCode) //zip or city location chages based on text input 
    }

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
        alert("Invalid Zip or City");
        console.log(`${zipCode} is not a valid zip or city`);

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
    const [tempZipCode, setTempZipCode] = useState(""); //used for text input 
    const [zipCode, setZipCode] = useState("93955");

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
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("");

    const userContext = useContext(UserContext);
    if(!userContext){
        throw new Error('User Context Error');
    }
    const { userId } = userContext;

    useEffect(() => {
        const fetchCities = async () =>{
            if(userContext){
                let cities = await getFavCities(userId);
                let strCities = cities?.toString()
                const arrCities = strCities?.split(',').map(city => city.trim())
                setCities(arrCities);
                if(arrCities.length > 0){
                    setSelectedCity(arrCities[0])
                }
            }
        };
        fetchCities();
    }, [userId]);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getCurrentWeather(zipCode); 
            setWeatherData(data);
        };
        fetchWeather();
    }, [zipCode]);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getCurrentWeather(zipCode);
            setWeatherData(data);
        };
        fetchWeather();
    }, []);

    useEffect(() =>{
        if(selectedCity){
            setZipCode(selectedCity);
        }
    }, [selectedCity]);

    const handleWeatherButton = () => { //sets zip code to the temp zip code when button pressed
        setZipCode(tempZipCode);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Current Weather</Text>
            </View>

            <View style={styles.inputContainer}>
                <Picker
                    selectedValue={selectedCity}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedCity(itemValue)}>
                     {cities.map((city, index) => (
                        <Picker.Item key={index} label={city} value={city} />
                    ))}
                </Picker>

                <TextInput 
                    placeholder="Enter zip or city"
                    value={tempZipCode}
                    onChangeText={text => setTempZipCode(text)} //temp variable so it's not updated every time you type a char
                    placeholderTextColor={'#000'}
                    style={styles.textInput}
                    //keyboardType='numeric' //optional zip code only input 
                >
            </TextInput>
              <TouchableOpacity onPress={handleWeatherButton}
              style={styles.yesterdayButton}>
                    <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
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
    },inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    picker:{
        height: 50,
        width: 150,
        marginHorizontal: 10,
        flex: 1
    },
    yesterdayButton: {
        backgroundColor: 'teal',
        padding: 10,
        paddingVertical: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        width: 50, 
        height: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16, 
    },
    textInput: {
        borderBottomWidth: 5,
        padding: 5,
        paddingVertical: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: "#fff",
        fontSize: 14,
        borderRadius: 10,
        borderBottomColor: '#ffde00',
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