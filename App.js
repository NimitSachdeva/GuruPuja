import { StatusBar } from 'expo-status-bar';
// import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView } from 'react-native';
import { render } from 'react-dom';
import * as Font from 'expo-font';
import Profile from './screens/Profile';
import Navigator from './routes/homeStack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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
          <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
            <Navigator>
            </Navigator>
          </SafeAreaView>
      
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
