import { SafeAreaView, Text, StyleSheet} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons'

export default function Header() {

    return (
        <SafeAreaView style={styles.rowContainer}>
            <Icon name='person-circle' size={40} color={'#FFFFFF'} style={{marginLeft: 20}}/>
            {/* <Icon name='storefront-outline' size={30} color='#2E8B57' />
            <Icon name='cube-outline' size={30} color='#2E8B57' /> */}
            <Text style={styles.headerText}>Olá, Fulano</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#2E8B57',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        color: '#FFFFFF',
        marginRight: 20
    }
})