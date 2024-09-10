import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, version } from 'react';
import { useNavigation } from "@react-navigation/native";
import { addUsers } from "../db-folder/db-service";
import * as SQLite from 'expo-sqlite';



const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    
    const createButton = async () =>{
        if(!username || !password || !rePassword){
            Alert.alert("All fields must be filled out");
            return;
        }
        if(password != rePassword){
            Alert.alert("Passwords must match");
            return;
        }else if(password.length < 5){
            Alert.alert("Password too short, must be 5 characters long");
            return;
        }
        try{
            await addUsers(username, password);
            Alert.alert("Account Created Succesfully");
            navigation.navigate('Login');
          }catch(error){
            console.log("Error creating account");
          }

    }
    
    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        >
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.title}>Yesterday's Weather</Text>
                <Text style={styles.label}>Enter Login:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    onChangeText={setUsername}
                    value={username}
                />

                <Text style={styles.label}>Enter Password: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    onChangeText={setPassword}
                    value={password}
                />

                <Text style={styles.label}>Re-Enter Password: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    onChangeText={setRePassword}
                    value={rePassword}
                />

                <TouchableOpacity style={styles.button} 
                onPress={createButton}>
                    <Text style={styles.buttonText}>Create Account</Text>
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
        paddingTop: 100,
    },title:{
        fontSize: 25,
        fontFamily: 'monospace',
        paddingBottom: 20,
        paddingTop: 20,
    },
    label:{
        fontSize: 20,
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
        marginTop: 20,
    },
    buttonText:{
        fontSize: 16,
        color: 'white'
    },
    linkText:{
        color: 'teal',
        fontSize: 22,
        
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    }
})
export default LoginScreen;