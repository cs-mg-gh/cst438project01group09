import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState, version } from 'react';
import { UserContext } from "../UserContext";


const HomeScreen = () => {

    const userContext = useContext(UserContext);
    if(!userContext){
        throw new Error('User Context Error');
    }
    
    const { username } = userContext;


    return(
        <View style={styles.container}>
            <Text>Welcome to the Home Screen!</Text>
            <Text style={styles.welcomeText}>Welcome {username}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText:{
        marginTop: 25,
        fontSize: 26,
        fontWeight: 'bold',
    }
})
export default HomeScreen;