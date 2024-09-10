import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import DebugScreen from './screens/DebugScreen';
import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';
import { dbStart } from './db-folder/db-service';
import { UserProvider } from './UserContext';

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
    <UserProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='CreateAccount' component={CreateAccountScreen}/>
        <Stack.Screen name='Debug' component={DebugScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
