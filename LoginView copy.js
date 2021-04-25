import React from "react";
import {StyleSheet, View, Text, TextInput, Image, ImageBackground ,TouchableOpacity} from "react-native";
// import {SignUp} from './SignUp';

class LoginView extends React.Component{
  render(){
    return (
      <View style={{flex:1,justifyContent:'center'}}>
        <View  style={{flexDirection:'row',justifyContent:'center'}, styles.parent}>
            <ImageBackground source={require('./assets/Gradient-Wallpaper-for-Laptop.jpg')} style={styles.child}>
              <Text style={styles.setFontSize}>LOGIN</Text>
            </ImageBackground>
        </View>
        
        <View style={{flex: 1,justifyContent:'center'}}>
          <View style={{flex:1,alignItems: 'center',marginVertical:30}}>
            <TextInput 
              clearTextOnFocus={true}
              placeholder="User Name"
              placeholderTextColor="#29837F" 
              style={styles.LoginText}/>
          </View>
          <View style={{flex:1,alignItems: 'center'}}>
            <TextInput 
              placeholder="Password" 
              placeholderTextColor="#29837F" 
              style={styles.LoginText}/>
          </View>
          <View style={{ alignItems: 'center'}}>
            <TouchableOpacity style={{marginTop:40,justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200, height:30, padding:30 }}>
              <Text style={{color:'white', fontSize:20,fontFamily: 'nunitosans-light',}}>Sign In</Text>
            </TouchableOpacity> 
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('/SignUp')}>
              <Text style={{color: 'blue'}}>
                Sign Up
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LoginText:{
    fontSize:20 ,
    fontFamily: 'nunitosans-bold',
    width: 300,
    padding:10
    ,borderRadius:10,   
    backgroundColor:'white' ,
    borderColor:"#29837F" ,
    borderBottomWidth:1,
    borderTopWidth:1, 
    borderLeftWidth:1,
    borderRightWidth:1,
  },

  setFontSize: {
    fontSize: 48,
    // fontWeight : 'bold' ,
    // color: '#29837F',
    color:'white',
    fontFamily: 'nunitosans-bold',
    alignItems: 'center'
  },
  parent : {
    minHeight:'40%',
    height : '40%',
    width : '100%',
    transform : [ { scaleX : 2 } ],
    borderBottomStartRadius : 320,
    // borderBottomEndRadius : 200,
    overflow : 'hidden',
  },
  child : {
      flex : 1,
      transform : [ { scaleX : 0.5 } ],
      alignItems : 'center',
      justifyContent : 'center'
  }
})
export default LoginView;