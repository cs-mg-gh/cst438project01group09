import { resetDB } from "../db-folder/db-service";
import { useNavigation } from "@react-navigation/native"
import * as SQLite from 'expo-sqlite';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ThemeContext } from './ThemeContext';

const EditOptionsScreen = () => {
    
    const navigation = useNavigation();

    const debugReset = async() =>{
        try{
            await resetDB();
            alert("Database has been cleared");
        }catch(error){
            console.log(`Error resetting: ${error}`);
        }
    }

    const showUsers = async(tableName: string)=>{
        try{
            let db = await SQLite.openDatabaseAsync('WeatherDB');
            let query = `SELECT * FROM user`;
            let rows = await db.getAllAsync(query);
            let strings = `Viewing: user\n`;
            for (let row of rows){
                strings += `${JSON.stringify(row)}\n`;
            }
            alert(strings);
        }catch(error){
            alert(`ERROR showing users: ${error}`);
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <Text style={styles.title}>Update Password</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('EditUsername');
                }} >
                    <Text style={styles.linkText}>Edit Username</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('EditPassword');
                }} >
                    <Text style={styles.linkText}>Edit Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate('DeleteAccount');
                }} >
                    <Text style={styles.linkText}>Account Deletion</Text>
                </TouchableOpacity>
            <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>showUsers("users")}>
                <Text style={styles.buttonText}>View Users</Text>
            </TouchableOpacity>
            <View style={styles.spaced}></View>
            <TouchableOpacity style={styles.button} onPress={()=>debugReset()}>
                <Text style={styles.buttonText}>CLEAR DATABASE AND RESET</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 20
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
    button:{
        backgroundColor: 'teal',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    spaced:{
        height: 20,
    },
    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    linkText:{
        color: 'teal',
        fontSize: 25,
        paddingBottom: 10,
        paddingTop: 20,
        
    }
});
export default EditOptionsScreen