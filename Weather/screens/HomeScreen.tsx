
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../UserContext";
import React, { useContext, useEffect, useState, version } from 'react';        
        
const HomeScreen = () => {
    const navigation = useNavigation();
    const userContext = useContext(UserContext);

    if(!userContext){
        throw new Error('User Context Error');
    }
    
    const { username } = userContext;
    const { userId } = userContext;

    const YesterdayButton = () =>{
        navigation.navigate('Yesterday');
    }

    const CurrentButton = () =>{
        navigation.navigate('CurrentWeather');
    }
    const FavoriteButton = () =>{
        navigation.navigate('FavoriteCity');
    }
    const SearchByRegionButton = () =>{
        navigation.navigate('SearchByRegion');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome {username}!</Text>
            <TouchableOpacity onPress={CurrentButton} style={styles.screenButton}>
                <Text style={styles.buttonText}>Today's Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={YesterdayButton} style={styles.screenButton}>
                <Text style={styles.buttonText}>Yesterday's Weather</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screenButton}
            onPress={FavoriteButton} >
                <Text style={styles.buttonText}>Add Favorite City</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screenButton}
            onPress={SearchByRegionButton} >
                <Text style={styles.buttonText}>Search By Region</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 32,
        paddingTop: 12
    },
    screenButton: {
        backgroundColor: 'teal',
        padding: 15,
        borderRadius: 5,
        width: 250, 
        height: 60,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20, 
    },
        welcomeText:{
        marginTop: 25,
        fontSize: 26,
        fontWeight: 'bold',
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    linkText:{
        color: 'teal',
        fontSize: 25,
        
    }
});
export default HomeScreen;

