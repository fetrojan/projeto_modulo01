import { Text, SafeAreaView, View, Image, TouchableOpacity } from "react-native"
import { globalStyles } from "../global/styles"
import Header from "../components/Header"
import Icon  from 'react-native-vector-icons/Ionicons'


export function Home() {
    
    return (
        <SafeAreaView style={globalStyles.safe}>

            <View style={globalStyles.buttonContainer}>
                <TouchableOpacity style={globalStyles.button}>
                    <Image style={globalStyles.buttonImage} source={require('../../assets/stock.png')}/>
                    <Text style={globalStyles.buttonText}>Estoque</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button}>
                    <Icon name='people-circle-outline' size={100} color={'#1C4E80'}/>
                    <Text style={globalStyles.buttonText}>Usuários</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}