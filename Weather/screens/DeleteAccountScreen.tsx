import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from './ThemeContext';
import { checkIfUserExists, deleteUser, updatePasswordDB } from "../db-folder/db-service";


const DeleteAccountScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const deleteAccount = async() =>{
        console.log(`Update Password clicked`);
        const trimmedUsername = username.trimEnd();
        const trimmedPassword = password.trimEnd();
        let check = await checkIfUserExists(trimmedUsername);
        if(check){
            console.log("Valid Account")
            try{
                let deleted = await deleteUser(trimmedUsername, trimmedPassword);
                if(deleted == null){
                    Alert.alert("Username does not match Password (Delete)");
                }else if(!deleted){
                    Alert.alert("Enter an existing account's username");
                }else{
                    Alert.alert("User Deleted Successfully");
                    navigation.navigate('Login');
                }
            }catch(error){
                console.log(`Error: ${error}`);
            }
        }else{
            Alert.alert("No Account exists with this Username");
            return;
        }
        
    }
    
    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        >
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.title}>Account Deletion</Text>
                <Text style={styles.label}>Enter Account Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
                <Text style={styles.label}>Enter Account Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity style={styles.button} 
                onPress={deleteAccount}>
                    <Text style={styles.buttonText}>Delete Account</Text>
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
export default DeleteAccountScreen;