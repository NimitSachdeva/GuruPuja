import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import LoginView from './LoginView';
import SignUp from './SignUp';
import Welcome from './Welcome';
import Booking from './Booking';
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView } from 'react-native';
// import { render } from 'react-dom';
import * as Font from 'expo-font';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
class App extends React.Component{
  
  state = {
    fontsLoaded: false
  };
  async componentDidMount(){
    await Font.loadAsync({
        //font1 or 2 can be any name. This'll be used in font-family            
        'nunitosans-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
        'nunitosans-light': require('./assets/fonts/NunitoSans-Light.ttf'),
        'nunitosans-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
        'righteous-regular': require('./assets/fonts/Righteous-Regular.ttf')
        });
        this.setState({fontsLoaded: true});
    }
  render(){
    if(this.state.fontsLoaded)
    {
        return (
          <NavigationContainer>
            <ImageBackground
              // blurRadius={4}
               style={styles.image}>
              <SafeAreaView style={styles.container}>
                {/* <LoginView></LoginView> */}
                {/* <SignUp></SignUp> */}
                {/* <Welcome></Welcome> */}
                {/* <Booking></Booking> */}
                <Profile></Profile>
                <StatusBar style="auto" />
              </SafeAreaView>
            </ImageBackground>
          </NavigationContainer>
      
    );
    }
    else
    {
      return (
        <ImageBackground
          source={require('./assets/Gradient-Wallpaper-for-Laptop.jpg')} style={styles.image}>
        </ImageBackground>
      );
    }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    fontFamily:'nunitosans-regular',
    flex: 1,
    // padding:10,
    justifyContent: 'center',
  },
  image: {
    // padding: 20,
    flex: 1,
    resizeMode: "center",
    justifyContent: "center"
  },
});
