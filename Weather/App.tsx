import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import YesterdayScreen from './screens/YesterdayScreen';
import CurrentWeatherScreen from './screens/CurrentWeatherScreen';
import EditUsernameScreen from './screens/EditUsernameScreen';
import DeleteAccountScreen from './screens/DeleteAccountScreen';
import {WEATHERSTACK_KEY} from '@env';
import DebugScreen from './screens/EditOptionsScreen';
import * as SQLite from 'expo-sqlite';
import React, { useContext, useState, useEffect } from 'react';
import { dbStart } from './db-folder/db-service';
import { UserProvider } from './UserContext';
import EditPasswordScreen from './screens/EditPasswordScreen';
import {ThemeProvider} from './ThemeProvider'; 


const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(()=>{
    const startDB = async()=>{
      try{
        await dbStart();
        console.log("Database started")
      }catch(error){
        console.log(`Error starting db: ${error}`);
      }
    };
    startDB();
  },[]);

  
  return (
    <ThemeProvider>
    <UserProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='CreateAccount' component={CreateAccountScreen}/>
        <Stack.Screen name='EditUsername' component={EditUsernameScreen}/>
        <Stack.Screen name='EditPassword' component={EditPasswordScreen}/>
        <Stack.Screen name='DeleteAccount' component={DeleteAccountScreen}/>
        <Stack.Screen name='Debug' component={DebugScreen}/>
        <Stack.Screen name='Yesterday' component={YesterdayScreen}/>
        <Stack.Screen name='CurrentWeather' component={CurrentWeatherScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
    </ThemeProvider>
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
  location: string;
}

export function getWeatherStackKey(): string {
  let key = WEATHERSTACK_KEY
  console.log(key);
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
