import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native"
import { globalStyles } from "../global/styles"
import Icon  from 'react-native-vector-icons/Ionicons'

export function Home({navigation}) {

    function navigateToInventory() {
        navigation.navigate('Inventory')
    }

    function navigateToUsers() {
        navigation.navigate('Users')
    }

    return (
        <SafeAreaView style={globalStyles.safe}>

            <View style={globalStyles.buttonContainer}>
                <TouchableOpacity style={globalStyles.button} onPress={navigateToInventory}>
                    <Image style={globalStyles.buttonImage} source={require('../../assets/stock.png')}/>
                    <Text style={globalStyles.buttonText}>Estoque</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={navigateToUsers}>
                    <Icon name='people-circle-outline' size={100} color={'#1C4E80'}/>
                    <Text style={globalStyles.buttonText}>Usuários</Text>
                </TouchableOpacity>
            </View>
         
        </SafeAreaView>
    )
}