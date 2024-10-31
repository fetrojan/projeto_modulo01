import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster'

import Header from './src/components/Header';
import BackHeader from './src/components/BackHeader';
import SplashScreen from './src/components/SplashScreen'

import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';
import { Inventory } from './src/pages/Inventory';
import { Users } from './src/pages/Users';
import { UserRegistration } from './src/pages/UserRegistration';
import { BranchMovements } from './src/pages/BranchMovements';
import { CourierMovement } from './src/pages/CourierMovement';
import { NewMovement } from './src/pages/NewMovement';
import { Map } from './src/pages/Map';

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  const [isLoading, setIsLoading] = useState(!fontsLoaded);
  const [showSplash, setShowSplash] = useState(false)

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" /> 
      </View>
    );
  }

  const handleLoginSuccess = () => {
    setShowSplash(true); 
  };

  const hideSplashScreen = () => {
    setShowSplash(false);
  };

  return (
    <NavigationContainer>
       {showSplash ? ( 
        <SplashScreen onFinish={hideSplashScreen} />
      ) : (
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen name='Login' component={Login} options={{header: () => <></>}}  initialParams={{ onLoginSuccess: handleLoginSuccess }}/>
        <Stack.Screen name='Home' component={Home}  options={({ navigation }) => ({header: () => <Header navigation={navigation} />})}/> 
        <Stack.Screen name='Inventory' component={Inventory} options={({ navigation }) => ({header: () => <BackHeader navigation={navigation} title="Estoque de Produtos" />})}/> 
        <Stack.Screen name='Users' component={Users} options={({ navigation }) => ({header: () => <BackHeader navigation={navigation} title="Usuários Cadastrados" />})}/> 
        <Stack.Screen name='UserRegistration' component={UserRegistration} options={({ navigation }) => ({header: () => <BackHeader navigation={navigation} title="Cadastro de Usuário" />})}/> 
        <Stack.Screen name='BranchMovements' component={BranchMovements} options={({ navigation }) => ({header: () => <Header navigation={navigation} />})}/> 
        <Stack.Screen name='CourierMovement' component={CourierMovement} options={({ navigation }) => ({header: () => <Header navigation={navigation} />})}/> 
        <Stack.Screen name='NewMovement' component={NewMovement} options={({ navigation }) => ({header: () => <BackHeader navigation={navigation} title="" />})}/> 
        <Stack.Screen name='Map' component={Map}  options={({ navigation }) => ({header: () => <BackHeader navigation={navigation} title="Mapa de Trajeto" />})}/> 

      </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}


