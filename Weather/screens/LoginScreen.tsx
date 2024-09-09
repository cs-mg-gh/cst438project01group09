import { Alert, Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, version } from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginButton = () =>{
        if(!username || !password){
            Alert.alert("All fields must be filled");
            return;
        }
        navigation.navigate('Home');
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
                    onChangeText={setUsername}
                    value={username}
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
                <View style={styles.bottom}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CreateAccount');
                    }} >
                        <Text style={styles.linkText}>Create Account</Text>
                    </TouchableOpacity>
                </View>
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
    label:{
        height: 36,
        fontSize: 20,
        marginBottom: 15,
    },
    title:{
        fontSize: 25,
        fontFamily: 'monospace',
        paddingBottom: 20,
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