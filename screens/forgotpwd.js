import React from "react";
import {StyleSheet, View, Text, TextInput, Image, ImageBackground ,TouchableOpacity} from "react-native";

class ForgotPwd extends React.Component{
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
              <Image source={require("../assets/Login.png")} style={{height:100, width:100}}></Image>
              <Text style={styles.setFontSize}>LOGIN</Text>
            </ImageBackground>
        </View>
        
        <View style={{flex: 1,flexDirection:'column', justifyContent:'center',height:350}}>
          <View style={{flex:1, marginTop:40}}>
            <View style={{alignItems: 'center'}}>
                <TextInput 
                clearTextOnFocus={true}
                placeholder="Email address"
                placeholderTextColor="#29837F" 
                style={styles.LoginText}/>
            </View>
            <View style={{alignItems: 'center', marginTop:30,}}>
                <TextInput 
                placeholder="Password" 
                placeholderTextColor="#29837F" 
                style={styles.LoginText}/>
            </View>
            <View style={{alignItems: 'center', marginTop:30,}}>
                <TextInput 
                placeholder="Confirm Password" 
                placeholderTextColor="#29837F" 
                style={styles.LoginText}/>
            </View>
            <View style={{alignItems: 'center', marginTop:40}}>
                <TouchableOpacity onPress={() => navigate('Login')} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200,padding:10, borderRadius:30 }}>
                <Text style={{color:'white', fontSize:20,fontFamily: 'nunitosans-light',}}>Change Password</Text>
                </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  LoginText:{
    height:50,
    fontSize:20 ,
    fontFamily: 'nunitosans-bold',
    width: 300,
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
export default ForgotPwd;