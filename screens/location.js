import React from "react";
import {StyleSheet, View, Text, TextInput, Image, ImageBackground ,TouchableOpacity} from "react-native";

class Location extends React.Component{
    render(){
      const { navigate } = this.props.navigation;
  
      return (
        <View style={{flex:1,justifyContent:'center'}}>
            <View>
                <ImageBackground source={require('../assets/Gradient-Wallpaper-for-Laptop.jpg')} 
                style={{
                flexDirection:'column',
                paddingTop:50,
                justifyContent:'center',
                alignItems:'center',height:250,borderColor:'white',overflow:'hidden',justifyContent:'center',borderBottomLeftRadius:150}} >
                <Image source={require("../assets/location.png")} style={{height:100, width:100}}></Image>
                <Text style={styles.setFontSize}>Our Location</Text>
                </ImageBackground>
            </View>
            <View style={{flex:1}}>

            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    setFontSize: {
        flexDirection:'row',
        fontSize: 34,
        padding:20,
        textAlignVertical:'bottom',
        // fontWeight : 'bold' ,
        // color: '#29837F',
        color:'white',
        fontFamily: 'nunitosans-light',
        alignItems: 'center'
      },
});
export default Location
