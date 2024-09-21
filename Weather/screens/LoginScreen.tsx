import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Switch, ImageBackground} from "react-native";
import React, { useContext, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { checkCredentials, getId } from "../db-folder/db-service";
import { UserContext } from "../UserContext";
import { ThemeContext } from './ThemeContext';

const LoginScreen = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const userContext = useContext(UserContext);
    if(!userContext){
        throw new Error('Error');
    }
    const { setUsername } = userContext;
    const { setUserId } = userContext;

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
                let idObj = await getId(trimmedUsername);
                // console.log(`ID OBJ: ${idObj}`);
                setUserId(idObj);
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
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} 
        >
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.title, { color: theme.textColor }]}>Zone Weather</Text>
                {/* <Text style={[styles.label, { color: theme.backgroundColor }]}>Login</Text> */}
                <Text style={[styles.label, { color: theme.textColor }]}>Enter Username: </Text>
                <TextInput
                    style={ theme.input }
                    placeholder="Enter Username"
                    onChangeText={setInputUsername}
                    value={inputUsername}
                />

                <Text style={[styles.label, { color: theme.textColor }]}>Enter Password: </Text>
                <TextInput
                    style={theme.input}
                    placeholder="Enter Password"
                    secureTextEntry = {true}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity style={theme.screenButton} 
                onPress={loginButton}>
                    <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.bottom}>

                <View style={styles.container}>                       
                    <TouchableOpacity style={theme.screenButton} onPress={toggleTheme}>
                    <Text style={[styles.buttonText, { color: theme.backgroundColor }]}>Toggle dark mode</Text>
                    </TouchableOpacity> 

                </View>

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CreateAccount');
                    }} >
                        <Text style={theme.linkText}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Debug');
                    }} >
                        <Text style={theme.linkTextDebug}>Edit Account</Text>
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
        fontSize: 30,
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
    },
    background:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
})
export default LoginScreen;