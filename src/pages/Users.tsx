import { Text, FlatList, SafeAreaView, View, Switch, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { globalStyles } from "../global/styles";


export function Users({navigation}) {

    const [users, setUsers] = useState([])

    function navigateToRegister() {
        navigation.navigate('UserRegistration')
    }

    function toggleSwitch(id) {
        axios.patch(process.env.EXPO_PUBLIC_API_URL + `/users/${id}/toggle-status'`)
        .then(() => {
            getUsers()
        })
        .catch((error) => {
            console.log('Não foi possível alterar o status', error)
        })
    }

    const arrayTeste = [
        {nome: 'Felipe', profile: 'motorista', id: 1, status: true},
        {nome: 'Farmacia', profile: 'filial', id: 2, status: false},
        {nome: 'Farmacia', profile: 'filial', id: 3, status: true},
        {nome: 'Farmacia', profile: 'filial', id: 4, status: true},
        {nome: 'Farmacia', profile: 'filial', id: 5, status: true},
        {nome: 'Farmacia', profile: 'filial', id: 6, status: false},
        {nome: 'Farmacia', profile: 'filial', id: 7, status: false},
        {nome: 'Farmacia', profile: 'filial', id: 8, status: false},
        {nome: 'Felipe', profile: 'motorista', id: 9, status: false},
        {nome: 'Felipe', profile: 'motorista', id: 10, status: true},
        {nome: 'Felipe', profile: 'motorista', id: 11, status: true},
        {nome: 'Felipe', profile: 'motorista', id: 12, status: true},
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

        const backgroundColor = item.status ? '#d1f5d3' : '#FFFFFF';

        return (
            <View style={[globalStyles.card, {backgroundColor}]}>
                    <View style={globalStyles.cardSection}>
                        <Image source={imageSource} style={globalStyles.cardImage}/>
                        <Switch
                        trackColor={{ false: '#D3D3D3', true: '#2E8B57' }} 
                        ios_backgroundColor="#D3D3D3"    
                        value={item.status}
                        onValueChange={(value) => toggleSwitch(item.id)}
                        />
                    </View>
                    <Text style={globalStyles.cardText}>{item.profile === 'motorista' ? 'Motorista' : 'Filial'}</Text>
            </View>
        )
    }

    return(

        <SafeAreaView style={globalStyles.safe}>
    
            <TouchableOpacity onPress={navigateToRegister} style={[globalStyles.button, {paddingVertical:10, alignSelf:'center'}]}>
                <Text style={[globalStyles.buttonText, {fontSize: 15}]}>Novo Usuário</Text>
            </TouchableOpacity>

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