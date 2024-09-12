
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../UserContext";
import React, { useContext, useState, version } from 'react';        
        
const HomeScreen = () => {
    const navigation = useNavigation();

    const userContext = useContext(UserContext);
    if(!userContext){
        throw new Error('User Context Error');
    }
    
    const { username } = userContext;

    const YesterdayButton = () =>{
        navigation.navigate('Yesterday');
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to the Home Screen!</Text>
            <View style={styles.yesterdayButton}>
            <TouchableOpacity onPress={YesterdayButton}>
                <Text style={styles.buttonText}>Yesterday's Weather</Text>
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
        welcomeText:{
        marginTop: 25,
        fontSize: 26,
        fontWeight: 'bold',
    }
});
export default HomeScreen;

