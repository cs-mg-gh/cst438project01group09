
import { StyleSheet,KeyboardAvoidingView,Platform, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../UserContext";
import React, { useContext, useEffect, useState, version } from 'react';        
import { getId, addCityToDB } from '../db-folder/db-service';
        
const FavoriteCityScreen = () => {
    const navigation = useNavigation();
    const userContext = useContext(UserContext);

    if(!userContext){
        throw new Error('User Context Error');
    }
    const { username } = userContext;
    const { userId } = userContext;

    const [city, setCity] = useState('');
    const addCity = async () => {
        if(!city){
            Alert.alert("Fill the City Field!");
            return;
        }
        if(!userId){
            Alert.alert("User ID not available");
        }
        if(userId === null){
            console.error(`User ID is Null`);
        }
        const trimmedCity = city.trimEnd();
        try{
            let check = await addCityToDB(trimmedCity, userId);
            Alert.alert("City Added to Favorites");
        }catch(error){
            console.error(`Error adding favorite city: ${error}`);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome {username}!</Text>
            <TextInput style={styles.input} placeholder='Enter City' onChangeText={setCity}></TextInput>
            <TouchableOpacity onPress={addCity} style={styles.button}>
                <Text style={styles.buttonText}>Add City</Text>
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
    input:{
        height: 60,
        width: 300,
        textAlign: 'center',
        borderColor: "black",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
    },
    button:{
        width: 150,
        height:60,
        backgroundColor: "teal",
        padding:15,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        fontSize: 22,
        color: 'white'
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
export default FavoriteCityScreen;

