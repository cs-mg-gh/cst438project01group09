import { createContext } from 'react';

export const themes = {
  light: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    button:{
        width: 150,
        height:60,
        backgroundColor: "teal",
        padding:15,
        alignItems: 'center',
        borderRadius: 5,
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
    buttonText:{
        fontSize: 22,
        color: 'black'
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
    screenButton: {
        backgroundColor: 'teal',
        padding: 10,
        borderRadius: 5,
        width: 200, 
        alignItems: 'center',
        marginTop: 10
    },
  },
  dark: {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    button:{
        width: 150,
        height:60,
        backgroundColor: "#EFEFEF",
        padding:15,
        alignItems: 'center',
        borderRadius: 5,
        color: "black",
    },
    input:{
        height: 60,
        width: 300,
        textAlign: 'center',
        borderColor: "white",
        color: "white",
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 16,
    },
    buttonText:{
        fontSize: 22,
        color: 'white'
    },
    linkText:{
        color: 'white',
        fontSize: 25,
        paddingBottom: 35,
        
    },
    linkTextDebug:{
        color: 'white',
        fontSize: 22,
        
    },
    screenButton: {
        backgroundColor: '#EFEFEF',
        padding: 10,
        borderRadius: 5,
        width: 200, 
        alignItems: 'center',
        marginTop: 10
    },
  },
};

export const ThemeContext = createContext(themes.light);