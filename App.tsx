import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster'

import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';
import Header from './src/components/Header';

import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { globalStyles } from './src/global/styles';

const Stack = createStackNavigator()


export default function App() {
  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  const [isLoading, setIsLoading] = useState(!fontsLoaded);

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" /> 
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen name='Login' component={Login} options={{header: () => <></>}}/>
        <Stack.Screen name='Home' component={Home} options={{header: () => <Header/>}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


