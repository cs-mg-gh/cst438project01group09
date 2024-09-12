import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { checkCredentials } from "../db-folder/db-service";
import { UserContext } from "../UserContext";

const LoginScreen = () => {
    const navigation = useNavigation();
    const userContext = useContext(UserContext);
    if(!userContext){
        throw new Error('Error');
    }
    const { setUsername } = userContext;

    const [inputUsername, setInputUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const loginButton = async () =>{
        if(!inputUsername || !password){
            Alert.alert("All fields must be filled");
            return;
        }
        const trimmedUsername = inputUsername.trimEnd();
        const trimmedPassword = password.trimEnd()
        try{
            let user = await checkCredentials(trimmedUsername, trimmedPassword);
            if(user && user.username == trimmedUsername && user.password == trimmedPassword){
                setUsername(trimmedUsername);
                navigation.navigate('Home');
            }else{
                Alert.alert("Invalid credentials")
            }
        }catch(error){
            console.log(`ERROR logging in: ${error}`);
            Alert.alert(`ERROR logging in: ${error}`);
        }
        

    }

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        >
        <View style={styles.container}>
            <View style={styles.container}>
            <Text style={styles.title}>Yesterday's Weather</Text>
                <Text style={styles.label}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Username"
                    onChangeText={setInputUsername}
                    value={inputUsername}
                />

                <Text style={styles.label}>Password: </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity style={styles.button} 
                onPress={loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
            <Button title="View Users" onPress={()=>showUsers("user")}></Button>
                <View style={styles.bottom}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CreateAccount');
                    }} >
                        <Text style={styles.linkText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Debug');
                    }} >
                        <Text style={styles.linkTextDebug}>Debug</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <Button title="DEBUG ONLY: RESET" onPress={()=>resetDB()}></Button>
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
    label:{
        height: 36,
        fontSize: 20,
        marginBottom: 15,
    },
    title:{
        fontSize: 25,
        fontFamily: 'monospace',
        paddingBottom: 25,
        paddingTop: 20
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
    linkText:{
        color: 'teal',
        fontSize: 25,
        paddingBottom: 35,
        
    },
    linkTextDebug:{
        color: 'teal',
        fontSize: 22,
        
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    bottom:{
        padding: 50,
        alignItems: 'center',
        paddingBottom: 20,
    }
})
export default LoginScreen;