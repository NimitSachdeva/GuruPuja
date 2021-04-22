import React from "react";
import {StyleSheet, View, Text, TextInput,TouchableOpacity} from "react-native";
// import {SignUp} from './SignUp';

class LoginView extends React.Component{
  render(){
    return (
      <View 
          style={{
              flex: 1,
              height: 500,
              // justifyContent:'center' ,
              marginTop:180,
              alignItems: 'center' ,
              
              // backgroundColor: 'rgba(255,255,255, 0.7)',
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