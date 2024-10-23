import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Text, SafeAreaView, ImageBackground, Image, Keyboard, Alert } from "react-native"
import axios from "axios"
import { globalStyles } from "../global/styles"
import { useEffect, useState } from "react"
import { CommonActions } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function Login({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function redirectToHome() {
        const profileLocalStorage = await AsyncStorage.getItem('@profile')

        if(profileLocalStorage === 'admin') {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name:'Home'}]
                    })
            )
        } else if (profileLocalStorage === 'filial') {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name:'BranchMovement'}]
                    })
            )
        } else {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name:'CourierMovement'}]
                    })
            )
        }
    }

    useEffect(() => {
        redirectToHome()
    }, [])

    function handleLogin() {
        axios.post(process.env.EXPO_PUBLIC_API_URL + '/login', {email, password})
        .then((response) => {
            AsyncStorage.setItem("@name", response.data.name)
            AsyncStorage.setItem("@profile", response.data.profile)

            if(response.data.profile === 'admin') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'Home'}]
                    })
                )
            } else if (response.data.profile === 'filial') {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'BranchMovement'}]
                    })
                )
            } else {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'CourierMovement'}]
                    })
                )    
            }
        })
        .catch((error) => {
            Alert.alert('Erro de Login', 'Credenciais inválidas')
        })
    }

    return (
        <SafeAreaView style={globalStyles.safe}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../../assets/background.png')} style={globalStyles.background}>
                
                
                    <View style={globalStyles.logoContainer}>
                        <Image source={require('../../assets/logo_PharmaFlow.png')} style={globalStyles.logoLogin} />
                        <Text style={globalStyles.logoTitle}>Pharma<Text style={globalStyles.logoDestaque}>Flow</Text></Text>
                    </View>
                    <View style={globalStyles.loginContainer}>
                
                        <TextInput
                                placeholder="Email"
                                placeholderTextColor="#4682B4"
                                style={globalStyles.input}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                        />
                        <TextInput
                                placeholder="Password"
                                placeholderTextColor="#4A90E2"
                                style={globalStyles.input}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                        />
                
                        <TouchableOpacity style={globalStyles.loginButton} onPress={handleLogin}>
                            <Text style={globalStyles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}