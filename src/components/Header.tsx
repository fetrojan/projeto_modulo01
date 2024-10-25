import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export default function Header({navigation}) {

    const [profile, setProfile] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        async function fetchProfile() {
            try {
                const storedProfile = await AsyncStorage.getItem('@profile')
                if (storedProfile !== null) {
                    setProfile(storedProfile)
                }
            } catch (error) {
                console.log('Erro ao buscar o perfil', error)
            }
        }
        async function fetchName() {
            try {
                const storedName = await AsyncStorage.getItem('@name')
                if (storedName !== null) {
                    setName(storedName)
                }
            } catch (error) {
                console.log('Erro ao buscar o perfil', error)
            }
        }

        fetchProfile()
        fetchName()
    }, [])


    function handleLogout() {
        AsyncStorage.removeItem('@name')
        AsyncStorage.removeItem('@profile')
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name:'Login'}]
                })
        )
    }

    const renderProfileIcon = () => {
        switch (profile) {
            case 'filial':
                return <Icon name='storefront' size={40} color={'#FFFFFF'} />;
            case 'motorista':
                return <Icon name='car-sport' size={40} color={'#FFFFFF'} />;
            case 'admin':
                return <Icon name='person-circle' size={40} color={'#FFFFFF'} />;
    }}

    return (
        <SafeAreaView style={styles.rowContainer}>
            <Text style={styles.headerText}>Olá, {name.toLowerCase() || 'Usuário'}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20, gap: 10}}>
                {renderProfileIcon()}
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={{color:'#FFFFFF', fontSize: 16}}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#229c8c',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#FFFFFF',
        marginLeft: 20
    }
})