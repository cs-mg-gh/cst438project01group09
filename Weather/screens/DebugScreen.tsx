import { resetDB } from "../db-folder/db-service";
import { useNavigation } from "@react-navigation/native"
import * as SQLite from 'expo-sqlite';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

//This screen is here for us to debug, will be removed for final submission and presentation//
const DebugScreen = () => {
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
            <TouchableOpacity style={styles.button} onPress={()=>showUsers("users")}>
                <Text style={styles.buttonText}>View Users</Text>
            </TouchableOpacity>
            <View style={styles.spaced}></View>
            <TouchableOpacity style={styles.button} onPress={()=>debugReset()}>
                <Text style={styles.buttonText}>CLEAR DATABASE AND RESET</Text>
            </TouchableOpacity>
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
    }
});
export default DebugScreen