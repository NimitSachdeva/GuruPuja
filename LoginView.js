import React from "react";
import {StyleSheet, View, Text, TextInput,TouchableOpacity} from "react-native";
// import { Text } from 'react-native-elements';

const LoginView = () => {
  return (
    <View 
        style={{
            flex: 1,
            height: 500,
            marginTop:180,
            alignItems: 'center' ,
      }}>
      <Text style={styles.setFontSize}>LOGIN</Text>
      <View style={{flexDirection: 'column', flex: 1,}}>
        <View style={{flexDirection: 'row', alignItems: 'center',marginTop:60, marginBottom:20}}>
          <TextInput 
            clearTextOnFocus={true}
            placeholder="User Name"
            placeholderTextColor="#29837F" 
            style={styles.LoginText}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput 
          placeholder="Password" 
          placeholderTextColor="#29837F" 
          style={styles.LoginText}/>
        </View>
        <View style={{ alignItems: 'center'}}>
          <TouchableOpacity style={{marginTop:40,justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200, height:30, padding:30 }}>
            <Text style={{color:'white', fontSize:20,fontFamily: 'opensanscondensed-light',}}>Sign In</Text>
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  LoginText:{
    fontSize:20 ,
    fontFamily: 'opensanscondensed-bold',
    width: 300,
    padding:10
    ,borderRadius:10, 
    backgroundColor:'white' ,
    borderColor:"#29837F" ,
    borderBottomWidth:1,
    borderTopWidth:1, 
    borderLeftWidth:1,
    borderRightWidth:1},

  setFontSize: {
    fontSize: 48,
    // fontWeight : 'bold' ,
    color: '#29837F',
    fontFamily: 'opensanscondensed-bold',
    alignItems: 'center'
  },
})
export default LoginView;