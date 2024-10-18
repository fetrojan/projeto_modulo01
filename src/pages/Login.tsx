import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, Alert, ImageBackground, Image } from "react-native"
import axios from "axios"
import { globalStyles } from "../global/styles"

export function Login() {
    return (
        <SafeAreaView style={globalStyles.safe}>
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
                    />
                    <TextInput
                            placeholder="Password"
                            placeholderTextColor="#4A90E2"
                            style={globalStyles.input}
                    />
                    
                    <TouchableOpacity style={globalStyles.loginButton}>
                        <Text style={globalStyles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}