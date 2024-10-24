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
    labelText: {
        marginHorizontal: 20,
        fontSize: 18,
        color: '#1C4E80',
        fontWeight: '600'
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
    },
    card: {
        backgroundColor: '#FFFFFF',
        width: 150,
        borderRadius: 20,
        marginTop: 15,
        padding: 10
    },
    cardSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        alignItems: 'center'
    },
    cardImage: {
        width: 50,
        height: 50,
    },
    cardText: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: '500'
    },
    cardTitle: {
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: '600',
        color:'#FFFFFF'
    },
    option: {
        backgroundColor: '#FFFFFF',
        width: 100,
        padding: 15,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#1C4E80',
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 15
    },
    optionSelected: {
        backgroundColor: '#229c8c',
        width: 100,
        padding: 15,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#FFFFFF',
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 15
    },
    subtitle: {
        fontSize: 24,
        color: '#1C4E80',
        fontWeight: 'bold'
    },
    productCard: {
        backgroundColor: '#229c8c',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 15,
        padding: 20,
    },
    productImage: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: '#1C4E80',
        alignSelf: 'center'
    },
    cardDescription: {
        fontWeight: '300',
        color: '#DDDD',
        fontStyle: 'italic'
    },
    pickerContainer: {
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#1C4E80',
        backgroundColor: '#FFFFFF',
        height: 50,
        marginHorizontal: 10
    },
    pickerLabel: {
        marginHorizontal: 10,
        marginTop: 15,
        fontSize: 18,
        color: '#1C4E80',
        fontWeight: '600'
    },
    picker: {
        height: 50,
        width: '100%',
        justifyContent: 'center'
    },
    pickerItem: {
        fontSize: 16,
        color: '#1C4E80',
    },
    textInput: {
        height: 50,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        borderColor: '#1C4E80',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        verticalAlign: 'middle' 
    },

})