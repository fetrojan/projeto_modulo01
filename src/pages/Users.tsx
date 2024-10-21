import { Text, FlatList, SafeAreaView, View, Switch, Image } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { globalStyles } from "../global/styles";


export function Users() {

    const [users, setUsers] = useState([])
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    const arrayTeste = [
        {nome: 'Felipe', profile: 'motorista', id: 1},
        {nome: 'Farmacia', profile: 'filial', id: 2},
        {nome: 'Farmacia', profile: 'filial', id: 3},
        {nome: 'Farmacia', profile: 'filial', id: 4},
        {nome: 'Farmacia', profile: 'filial', id: 5},
        {nome: 'Farmacia', profile: 'filial', id: 6},
        {nome: 'Farmacia', profile: 'filial', id: 7},
        {nome: 'Farmacia', profile: 'filial', id: 8},
        {nome: 'Felipe', profile: 'motorista', id: 9},
        {nome: 'Felipe', profile: 'motorista', id: 10},
        {nome: 'Felipe', profile: 'motorista', id: 11},
        {nome: 'Felipe', profile: 'motorista', id: 12},
    ]

    function getUsers() {
        axios.get(process.env.EXPO_PUBLIC_API_URL + '/users')
        .then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((error) => {
            console.log('Não foi possível obter a lista de usuários', error)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    function renderUserCard({item}) {
        if (item.profile === 'admin') {
            return null
        }

        let imageSource = null
        if (item.profile === 'motorista') {
            imageSource = require('../../assets/motorista.png')
        } else if (item.profile === 'filial') {
            imageSource = require('../../assets/filial.png')
        }

        return (
            <View style={globalStyles.card}>
                    <View style={globalStyles.cardSection}>
                        <Image source={imageSource} style={globalStyles.cardImage}/>
                        <Switch
                        trackColor={{ false: '#D3D3D3', true: '#2E8B57' }} 
                        ios_backgroundColor="#D3D3D3"    
                        value={isEnabled}
                        onValueChange={toggleSwitch}
                        />
                    </View>
                    <Text style={globalStyles.cardText}>{item.profile === 'motorista' ? 'Motorista' : 'Filial'}</Text>
            </View>
        )
    }

    return(

        <SafeAreaView style={globalStyles.safe}>

            <Text> Pagina de Usuarios</Text>
    
            <FlatList 
            data={arrayTeste}
            renderItem={renderUserCard}
            keyExtractor={(item) => item.id.toString()} 
            numColumns={2}
            columnWrapperStyle={{justifyContent:'space-between'}}
            contentContainerStyle={{paddingHorizontal: 22}}
            />

        </SafeAreaView>

    )
}