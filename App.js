import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import LoginView from './LoginView'
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'opensanscondensed-bold': require('./assets/fonts/OpenSansCondensed-Bold.ttf'),
      'opensanscondensed-italic': require('./assets/fonts/OpenSansCondensed-LightItalic.ttf'),
      'opensanscondensed-light': require('./assets/fonts/OpenSansCondensed-Light.ttf')
      });
      
    })
  
  const handlePress = () => console.log("Clicked")
  return (
    <ImageBackground
      // blurRadius={4}
      source={require('./assets/gradient.jpg')} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <LoginView></LoginView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily:'opensanscondensed-bold',
    flex: 1,
    padding:10,
    // backgroundColor: 'rgba(0,0,0, 0.6)',
    // alignItems: 'baseline',
    justifyContent: 'center',
  },
  image: {
    // padding: 20,
    flex: 1,
    resizeMode: "center",
    justifyContent: "center"
  },
});
