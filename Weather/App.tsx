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

export async function getYesterdayWeather(): Promise<void> {
  const url = new URL('http://api.weatherstack.com/historical')
  url.searchParams.append('access_key', WEATHERSTACK_KEY);
  url.searchParams.append('query', '93933')
  url.searchParams.append('historical_date', '2015-01-21')
  url.searchParams.append('hourly', '1')

  try {
      const response = await fetch(
          url
      );
      const json = await response.json();
      console.log(json);
      return json;
  } catch (error) {
      console.error('Error fetching weather data:', error);
  }
  return;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
