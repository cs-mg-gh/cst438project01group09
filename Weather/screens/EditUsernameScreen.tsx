import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from 'react';
import { useNavigation } from "@react-navigation/native";

import { checkIfUserExists, updateUsernameDB } from "../db-folder/db-service";
import { ThemeContext } from './ThemeContext';

const EditUsernameScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [oldUsername, setOldUsername] = useState('')
    const [newUsername, setNewUsername] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    
    const updateUsername = async () =>{
        console.log(`Update Username clicked`);
        const trimmedOldUsername = oldUsername.trimEnd();
        const trimmedNewUsername = newUsername.trimEnd();

        if(!trimmedOldUsername && !trimmedNewUsername){
            Alert.alert("Enter your old username to change it")
        }
        if(trimmedNewUsername == trimmedOldUsername){
            Alert.alert("Your Username did not change");
        }
        try{
            let check = await checkIfUserExists(trimmedNewUsername);
            if(check){
                Alert.alert("This username already exists, choose another.")
            }else{
                let isValid = await updateUsernameDB(trimmedOldUsername, trimmedNewUsername);
                if(!isValid){
                    console.log(`isValid: ${isValid}`);
                    Alert.alert("Enter an existing account's username")
                }else{
                    Alert.alert("Username Changed Successfully");
                    navigation.navigate('Login');
                }
            }
        }catch(error){
            console.log(`Error: ${error}`);
        }

    }
    
    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        >
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.title}>Update Username</Text>
                <Text style={styles.label}>Enter Old Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setOldUsername}
                    value={oldUsername}
                />
                <Text style={styles.label}>Enter New Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setNewUsername}
                    value={newUsername}
                />
                <TouchableOpacity style={styles.button} 
                onPress={updateUsername}>
                    <Text style={styles.buttonText}>Update Username</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login');
                }} >
                    <Text style={styles.linkText}>Login Page</Text>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    formContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: 25,
    },title:{
        fontSize: 25,
        fontFamily: 'monospace',
        paddingBottom: 20,
        paddingTop: 10,
    },
    label:{
        fontSize: 15,
        marginBottom: 15,
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
        marginTop: 10,
        marginBottom: 15
    },
    buttonText:{
        fontSize: 14,
        color: 'white',
        justifyContent: 'center'
    },
    linkText:{
        color: 'teal',
        fontSize: 25,
        
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    }
})
export default EditUsernameScreen;