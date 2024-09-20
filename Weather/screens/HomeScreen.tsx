
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../UserContext";
import React, { useContext, useState, version } from 'react'; 
import { ThemeContext } from './ThemeContext';       
        
const HomeScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();

    const userContext = useContext(UserContext);
    if(!userContext){
        throw new Error('User Context Error');
    }
    
    const { username } = userContext;

    const YesterdayButton = () =>{
        navigation.navigate('Yesterday');
    }

    const CurrentButton = () =>{
        navigation.navigate('CurrentWeather');
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={{color : theme.textColor}}>Welcome to the Home Screen!</Text>
            <View style={theme.screenButton}>
            <TouchableOpacity onPress={CurrentButton}>
                <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>Today's Weather</Text>
            </TouchableOpacity>
            </View>
            <View style={theme.screenButton}>
            <TouchableOpacity onPress={YesterdayButton}>
                <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>Yesterday's Weather</Text>
            </TouchableOpacity>
            </View>


            < View style={styles.container}>                       
                <TouchableOpacity onPress={toggleTheme}>
                <Text style={{ color: theme.textColor }}>Toggle dark mode</Text>
                </TouchableOpacity> 

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: 200, 
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16, 
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

