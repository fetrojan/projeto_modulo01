import { Text, TextInput, SafeAreaView, View, TouchableOpacity, Image, ScrollView, Alert, KeyboardAvoidingView, Platform } from "react-native";
import axios from "axios";
import { globalStyles } from "../global/styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from "react";

export function UserRegistration({navigation}) {
    
    const [profile, setProfile] = useState('motorista')
    const [document, setDocument] = useState('')
    const [name, setName] = useState('')
    const [address, setAdress] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    function selectMotorista() {
        setProfile('motorista')
    }

    function selectFilial() {
        setProfile('filial')
    }

    function handleSubmit() {
        if (!name || !document || !address) {
            Alert.alert('Por favor, preencha todos os campos');
            return;
        }
        else if (!email || !password || !confirmedPassword) {
            Alert.alert('Por favor, preencha todos os campos de login!');
            return;
        }
        else if (password != confirmedPassword) {
            Alert.alert('A confirmação da senha não corresponde à senha')
            return
        }

        axios.post(process.env.EXPO_PUBLIC_API_URL + '/register', {
            name: name,
            document: document,
            full_address: address,
            email: email,
            password: password,
            profile: profile
        }).then(() => {
            Alert.alert('Obrigado', 'Cadastro realizado com sucesso!')
            navigation.navigate('Home')
        }).catch((error) => {
            Alert.alert('Error', 'Não foi possível realizar o cadastro')
            console.log(error)
        })
    }

    return (

        <SafeAreaView style={globalStyles.safe}>
            <ScrollView>

                <View style={globalStyles.cardSection}>
                    <TouchableOpacity style={[globalStyles.option, profile === 'motorista' && globalStyles.optionSelected]} onPress={selectMotorista}>
                        <Image style={globalStyles.cardImage} source={require('../../assets/motorista.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.option, profile === 'filial' && globalStyles.optionSelected]} onPress={selectFilial}>
                        <Image style={globalStyles.cardImage} source={require('../../assets/filial.png')}/>
                    </TouchableOpacity>
                </View>

                <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={{marginTop:10}}>
                        <Text style={globalStyles.labelText}>Nome Completo</Text>
                        <TextInput style={[globalStyles.input, {marginVertical:0}]} value={name} onChangeText={setName}/>
                    </View>
                    <View style={{marginTop:10}}>
                        {profile === 'motorista' ? <Text style={globalStyles.labelText}>CPF</Text> : <Text style={globalStyles.labelText}>CNPJ</Text> }
                        <TextInput style={[globalStyles.input, {marginVertical:0}]} value={document} onChangeText={setDocument} keyboardType="numeric"/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={globalStyles.labelText}>Endereço Completo</Text>
                        <TextInput style={[globalStyles.input, {marginVertical:0}]} value={address} onChangeText={setAdress}/>
                    </View>
                    <View style={[globalStyles.cardSection, {justifyContent:'flex-start', marginLeft:20}]}>
                        <Icon name='document-lock-outline' size={35} color='#1C4E80'/>
                        <Text style={globalStyles.subtitle}>Dados de Login</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={globalStyles.labelText}>Email</Text>
                        <TextInput style={[globalStyles.input, {marginVertical:0}]} value={email} onChangeText={setEmail} keyboardType="email-address"/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={globalStyles.labelText}>Senha</Text>
                        <TextInput style={[globalStyles.input, {marginVertical:0}]} value={password} onChangeText={setPassword} secureTextEntry/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={globalStyles.labelText}>Confirme a senha</Text>
                        <TextInput style={[globalStyles.input, {marginVertical:0}]} value={confirmedPassword} onChangeText={setConfirmedPassword} secureTextEntry/>
                    </View>

                <TouchableOpacity style={globalStyles.loginButton} onPress={handleSubmit}>
                        <Text style={globalStyles.loginButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </ScrollView>
        </SafeAreaView>

    )
}