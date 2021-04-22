import React from "react";
import { ScrollView } from "react-native";
import {StyleSheet, View, Text, TextInput,TouchableOpacity} from "react-native";

class SignUp extends React.Component {
  render(){
    return (
        <View 
            style={{
                flex: 1,
                height: 500,
                // justifyContent:'center' ,
                marginTop:80,
                alignItems: 'center' ,
                
                // backgroundColor: 'rgba(255,255,255, 0.7)',
            }}>
            <Text style={styles.setFontSize}>Sign Up</Text>
            <View style={{flexDirection: 'column', flex: 1,}}>
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:40, marginBottom:20}}>
                <TextInput 
                    clearTextOnFocus={true}
                    placeholder="Enter the User Name"
                    placeholderTextColor="#29837F" 
                    style={styles.LoginText}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center' ,marginBottom:20}}>
                <TextInput 
                    placeholder="Enter your email ID" 
                    placeholderTextColor="#29837F" 
                    style={styles.LoginText}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',  marginBottom:20}}>
                <TextInput 
                    placeholder="Enter the Date of Guru Puja Phase-2" 
                    placeholderTextColor="#29837F" 
                    style={styles.LoginText}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',  marginBottom:20}}>
                <TextInput 
                    placeholder="Enter the Password" 
                    placeholderTextColor="#29837F" 
                    style={styles.LoginText}/>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:20}}>
                <TextInput 
                    placeholder="Confirm the Password" 
                    placeholderTextColor="#29837F" 
                    style={styles.LoginText}/>
                </View>
                <View style={{ alignItems: 'center'}}>
                <TouchableOpacity style={{marginTop:40,justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200, height:30, padding:30 }}>
                    <Text style={{color:'white', fontSize:20,fontFamily: 'opensanscondensed-light',}}>Sign Up</Text>
                </TouchableOpacity> 
                </View>
            </View>
            </View>
        
    );
  }
}

const styles = StyleSheet.create({
  LoginText:{
    fontSize:20 ,
    fontFamily: 'opensanscondensed-bold',
    width: 320,
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
export default SignUp;