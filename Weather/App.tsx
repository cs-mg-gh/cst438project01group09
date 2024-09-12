import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import YesterdayScreen from './screens/YesterdayScreen';
import {WEATHERSTACK_KEY} from '@env';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='CreateAccount' component={CreateAccountScreen}/>
      <Stack.Screen name='Yesterday' component={YesterdayScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

interface WeatherData {
  chanceofrain: number;
  feelslike: number;
  humidity: number; 
  temperature: number; 
  uv_index: number; 
  visibility: number; 
  weather_descriptions: string[];
  weather_icons: string[];
  wind_dir: string;
  wind_speed: number; 
  windgust: number; 
}

export function getWeatherStackKey(): string {
  let key = WEATHERSTACK_KEY
  return key
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
