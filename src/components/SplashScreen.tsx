// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../global/styles';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo_PharmaFlow.png')} style={globalStyles.logoLogin} />
        <Text style={globalStyles.logoTitle}>Pharma<Text style={globalStyles.logoDestaque}>Flow</Text></Text>
        <LottieView
        source={require('../../assets/animacao.json')}
        style={{ width: 300, height: 300 }}
        autoPlay
        loop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
