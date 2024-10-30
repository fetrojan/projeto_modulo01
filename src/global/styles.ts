import { StyleSheet } from "react-native";

const cardShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
};


const colors = {
    primary: '#1C4E80',
    accent: '#229c8c',
    white: '#FFFFFF',
    shadow: '#000',
};

const fontSizes = {
    small: 16,
    medium: 18,
};



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
        shadowColor: colors.shadow,
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
        color: colors.accent,
        marginTop: 0
    },
    logoDestaque: {
        fontFamily: 'Lobster_400Regular',
        fontSize: 38,
        color: colors.primary
    },
    logoLogin: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 20
    },
    labelText: {
        marginHorizontal: 20,
        fontSize: fontSizes.medium,
        color: colors.primary,
        fontWeight: '600'
    },
    loginButton: {
        backgroundColor: colors.accent,
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
        marginTop: 20
    },
    loginButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fontSizes.small,
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
        borderColor: colors.primary,
        marginTop: 30,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonImage: {
        width: 100,
        height: 100
    },
    card: {
        backgroundColor: colors.white,
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
        fontSize: fontSizes.small,
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: '500'
    },
    cardTitle: {
        fontSize: 22,
        alignSelf: 'center',
        marginTop: 5,
        fontWeight: '600',
        color:colors.white
    },
    option: {
        backgroundColor: colors.white,
        width: 100,
        padding: 15,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: colors.primary,
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 15
    },
    optionSelected: {
        backgroundColor: colors.accent,
        width: 100,
        padding: 15,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: colors.white,
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 15
    },
    subtitle: {
        fontSize: 24,
        color: colors.primary,
        fontWeight: 'bold'
    },
    productCard: {
        backgroundColor: colors.accent,
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
        borderColor: colors.primary,
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
        borderColor: colors.primary,
        backgroundColor: colors.white,
        height: 50,
        marginHorizontal: 10
    },
    pickerLabel: {
        marginHorizontal: 10,
        marginTop: 15,
        fontSize: fontSizes.medium,
        color: colors.primary,
        fontWeight: '600'
    },
    picker: {
        height: 50,
        width: '100%',
        justifyContent: 'center'
    },
    pickerItem: {
        fontSize: fontSizes.small,
        color: colors.primary,
    },
    textInput: {
        height: 50,
        fontSize: fontSizes.medium,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        verticalAlign: 'middle' 
    },
    movementCard: {
        ...cardShadow,
        borderRadius: 20,
        backgroundColor: colors.white,
        padding: 30,
        marginHorizontal: 15,
        height: '85%'
    },
    inTransitCard: {
        ...cardShadow,
        borderRadius: 20,
        backgroundColor: '#D3D3D3',
        padding: 30,
        marginHorizontal: 15,
        height: '85%'
    },
    collectedCard: {
        ...cardShadow,
        borderRadius: 20,
        backgroundColor: colors.accent,
        padding: 30,
        marginHorizontal: 15,
        height: '85%'
    },
    movementSection: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    movementImage: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    movementTitle: {
        fontSize: fontSizes.small,
        fontWeight: '600',
        color:colors.primary,
        marginTop:20,
    },
    movementQuantity: {
        fontSize: fontSizes.small,
        fontWeight: 'bold',
        marginTop: 20
    },
    movementButton: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        width: 'auto',
    },
    movementButtonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: fontSizes.small,
    }

})