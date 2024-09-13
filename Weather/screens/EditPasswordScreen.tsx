import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

import { checkIfUserExists, updatePasswordDB } from "../db-folder/db-service";


const EditPasswordScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const updatePassword = async() =>{
        console.log(`Update Password clicked`);
        const trimmedUsername = username.trimEnd();
        const trimmedOldPassword = oldPassword.trimEnd();
        const trimmedNewPassword = newPassword.trimEnd();
        let check = await checkIfUserExists(trimmedUsername);
        if(check){
            console.log("Valid Account")
            if(!trimmedOldPassword && !trimmedNewPassword){
                Alert.alert("Enter your old password to change it");
                return;
            }
            if(trimmedNewPassword == trimmedOldPassword){
                Alert.alert("Your Password did not change")
            }
            else if(trimmedNewPassword.length < 5){
                Alert.alert("New Password too short, must be 5 characters long");
                return;
            }
            try{
                let isValid = await updatePasswordDB(trimmedOldPassword, trimmedNewPassword, trimmedUsername);
                if(isValid == null){
                    // console.log(`isValid: ${isValid}`);
                    Alert.alert("Username does not match Password");
                }
                else if(!isValid){
                    console.log(`isValid: ${isValid}`);
                    Alert.alert("Enter an existing account's username");
                }else{
                    Alert.alert("Password Changed Successfully");
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
            <Text style={styles.title}>Update Password</Text>
                <Text style={styles.label}>Enter Account Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
                <Text style={styles.label}>Enter Old Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setOldPassword}
                    value={oldPassword}
                />
                <Text style={styles.label}>Enter New Password: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry = {true}
                    onChangeText={setNewPassword}
                    value={newPassword}
                />

                <TouchableOpacity style={styles.button} 
                onPress={updatePassword}>
                    <Text style={styles.buttonText}>Update Password</Text>
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
        paddingTop: 100,
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
export default EditPasswordScreen;