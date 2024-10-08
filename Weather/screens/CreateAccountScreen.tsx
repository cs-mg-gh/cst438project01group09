import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { addUsers, checkIfUserExists } from "../db-folder/db-service";
import { ThemeContext } from './ThemeContext';


const LoginScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    
    const createButton = async () =>{
        const trimmedUsername = username.trimEnd();
        const trimmedPassword = password.trimEnd()
        const trimmedRePassword = rePassword.trimEnd()

        if(!trimmedUsername || !trimmedPassword || !trimmedRePassword){
            Alert.alert("All fields must be filled out");
            return;
        }
        if(trimmedPassword != trimmedRePassword){
            Alert.alert("Passwords must match");
            return;
        }else if(trimmedPassword.length < 5){
            Alert.alert("Password too short, must be 5 characters long");
            return;
        }
        try{

            let check = await checkIfUserExists(trimmedUsername);
            if(check){
                Alert.alert("This username already exists, choose another.")
            }
            else{
                await addUsers(trimmedUsername, trimmedPassword);
                Alert.alert("Account Created Succesfully");
                navigation.navigate('Login');
            }
          }catch(error){
            console.log(`ERROR creating account: ${error}`);

          }

    }
    
    return(
        <KeyboardAvoidingView
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        >

        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={[styles.formContainer, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Zone Weather</Text>
                <Text style={[styles.label, { color: theme.textColor }]}>Enter Login:</Text>

                <TextInput
                    style={theme.input}
                    placeholder="Enter Username"
                    onChangeText={setUsername}
                    value={username}
                />

                <Text style={[styles.label, { color: theme.textColor }]}>Enter Password: </Text>
                <TextInput
                    style={theme.input}
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    onChangeText={setPassword}
                    value={password}
                />

                <Text style={[styles.label, { color: theme.textColor }]}>Re-Enter Password: </Text>
                <TextInput
                    style={theme.input}
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    onChangeText={setRePassword}
                    value={rePassword}
                />

                <TouchableOpacity style={theme.screenButton} 
                onPress={createButton}>
                    <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>Login</Text>
                </TouchableOpacity>

            </View>
            

            <View style={styles.bottomContainer}>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login');
                }} >
                    <Text style={theme.linkText}>Login Page</Text>
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
        fontSize: 30,
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
        fontSize: 25,
        
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    }
})
export default LoginScreen;