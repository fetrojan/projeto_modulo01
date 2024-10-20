import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#D3D3D3'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',  
    },
    loginContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingTop: 100,
        paddingBottom: 50,
        marginHorizontal: 15,
        borderRadius: 20,
        elevation: 5
    },
    logoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 70,
        zIndex: 1
    },
    logoTitle: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#229c8c',
        marginTop: 0
    },
    logoDestaque: {
        fontFamily: 'Lobster_400Regular',
        fontSize: 38,
        color: '#1C4E80'
    },
    logoLogin: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    input: {
        borderWidth: 1,
        borderColor: '#1C4E80',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 20
    },
    loginButton: {
        backgroundColor: '#229c8c',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
        marginTop: 20
    },
      loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgba(46, 139, 87, 0.75)',
        width: 250,
        padding: 20,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#1C4E80',
        marginTop: 30,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonImage: {
        width: 100,
        height: 100
    }

})