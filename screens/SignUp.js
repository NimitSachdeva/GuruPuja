import React from "react";
import { ScrollView } from "react-native";
import {StyleSheet, View, Text, TextInput,TouchableOpacity, Image, ImageBackground} from "react-native";

class SignUp extends React.Component {
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1,justifyContent:'center'}}>
        <View>
            <ImageBackground source={require('../assets/Gradient-Wallpaper-for-Laptop.jpg')} 
            style={{
              flexDirection:'column',
              paddingTop:20,
              justifyContent:'center',
              alignItems:'center',height:230,borderColor:'white',overflow:'hidden',justifyContent:'center',borderBottomLeftRadius:110}} >
              <Image source={require("../assets/Signup.png")} style={{height:100, width:100}}></Image>
              <Text style={styles.setFontSize}>Sign Up</Text>
            </ImageBackground>
        </View>
        <View style={{flex:1,justifyContent:'center',minHeight:450}}>
            <View style={{alignItems:'center',}}>
              <TextInput 
                  clearTextOnFocus={true}
                  placeholder="Enter your Name"
                  placeholderTextColor="#29837F" 
                  style={styles.LoginText}/>
              </View>
              <View style={{alignItems: 'center' ,marginTop:15}}>
              <TextInput 
                  placeholder="Enter your email ID" 
                  placeholderTextColor="#29837F" 
                  style={styles.LoginText}/>
              </View>
              <View style={{alignItems: 'center',  marginTop:15}}>
              <TextInput 
                  placeholder="Enter the Date of Guru Puja Phase-2" 
                  placeholderTextColor="#29837F" 
                  style={styles.LoginText}/>
              </View>
              <View style={{alignItems: 'center',  marginTop:15}}>
              <TextInput 
                  placeholder="Enter the Password" 
                  placeholderTextColor="#29837F" 
                  style={styles.LoginText}/>
              </View>
              <View style={{alignItems: 'center', marginTop:15}}>
              <TextInput 
                  placeholder="Confirm the Password" 
                  placeholderTextColor="#29837F" 
                  style={styles.LoginText}/>
              </View>
              <View style={{ alignItems: 'center', marginTop:25}}>
              <TouchableOpacity onPress={() => navigate('Login')} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200,padding:10, borderRadius:30 }}>
                  <Text style={{color:'white', fontSize:20,fontFamily: 'nunitosans-light',}}>Sign Up</Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => navigate('Login')} >
                <Text style={{marginTop:10,fontSize:18,color: '#29837F', textDecorationStyle:'solid'}}>
                  Sign In instead
                </Text>
              </TouchableOpacity>
              </View>
          </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  LoginText:{
    height:50,
    fontSize:18 ,
    fontFamily: 'nunitosans-bold',
    width: 350,
    padding:10
    ,borderRadius:10, 
    backgroundColor:'white' ,
    shadowColor: "#000",
    shadowOffset:{
    width: 10,
    height: 2,
    },
    shadowOpacity: 11.17,
    shadowRadius: 1.49,
    elevation: 22,
  },

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
})
export default SignUp;