import { Button, StyleSheet, Text, TextInput, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect, version } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//import MapView from "react-native-maps";
import { StatusBar } from 'expo-status-bar';
import climacellDocs from '@api/climacell-docs';

const MapDisplay = () => {
    
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState(); 

    const api_key = 'tN6hqSkc0n9gHChOC2qLeJ18qiCAZpmE';
    let latitude = 42.3478;
    let longitude = -71.0466; 



    useEffect(() => {
        fetch("https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=tN6hqSkc0n9gHChOC2qLeJ18qiCAZpmE")
        .then(response => response.json())
        .then(
          (result) => {
            setIsLoading(false);
            setResponse(result);
          },
          (error) => {
            setIsLoading(false);
            setError(error);
          }
        )
      }, []);

    const getContent = () => {
        if (isLoading) {
          return <ActivityIndicator size="large" />;
        }
    
        if (error) {
          return <Text>{error}</Text>
        }
        
        console.log(response);
        return <Text>API called!</Text>;
    };
      

    return(
        <View style={styles.container}>
            {getContent()}
            <StatusBar style="auto" />
            
        </View>

    );
};




const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})
export default MapDisplay;

