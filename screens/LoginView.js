import React from "react";
import {StyleSheet, View, Text, TextInput, Image, ImageBackground ,TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';
// import ValidationComponent from 'react-native-form-validator';

class LoginView extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      email:'',
      emailError:'',
      passwordError:'',
      password:'',
      secureTextEntry:true,
      isValidEmail: true,
      isValidPassword: true
      
    };
  }
  navigation_pages(navigator){
    const { navigate } = this.props.navigation;
    navigate(navigator)
  }
  Validator(){
    let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    console.log(strongRegex.test(this.state.password))
    
     if(!this.state.email){
      this.setState({emailError:'Email field can not be empty'})
      return this.setState({isValidEmail:false});
    }
    else if(!this.state.password){
      this.setState({passwordError:'Password field can not be empty'})
      return this.setState({isValidPassword:false});  
    }
    else if (reg.test(this.state.email) === false) {
      this.setState({ emailError: 'Email is not correct' })
      return this.setState({isValidEmail:false});
    }
    else if(this.state.password.length<=8){
      this.setState({passwordError:'Password should be more than 8 characters'})
      return this.setState({isValidPassword:false});
    }
    else if(strongRegex.test(this.state.password)===false){
      this.setState({passwordError:'Password should contain at least 1 Capital character, 1 Numeric character, 1 Special Character'})
      return this.setState({isValidPassword:false});
    }
    else{
      this.setState({isValidEmail:true})
        return(this.navigation_pages('Welcome'));
      }
}

  render(){

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
          <View style={{flex:1, marginTop:50}}>
          <View style={{alignItems: 'center'}}>
            <TextInput 
              clearTextOnFocus={true}
              onChangeText={(text)=> {this.setState({email: text})}}
              placeholder="Email ID"
              // onBlur={() => this.emailValidator()}
              placeholderTextColor="#29837F"
              style={styles.LoginText}
             />
          </View>
          { this.state.isValidEmail ? null :
            <Animatable.View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}} animation="fadeInLeft" duration={500}>
              <Image source={require('../assets/warning.png')} style={{height:20, width:20, marginRight:10}}></Image>
              <Text style={{color:'red',marginTop:30, textAlign:'center', maxWidth:300 }}>{this.state.emailError}</Text>
            </Animatable.View>
          }
          
          <View style={{alignItems: 'center', marginTop:20}}>
            <TextInput 
              onChangeText={(text)=> {this.setState({password: text})}}
              secureTextEntry={true}
              placeholder="Password" 
              placeholderTextColor="#29837F" 
              style={styles.LoginText}/>
            { this.state.isValidPassword ? null :
              <Animatable.View style={{flexDirection:'row',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}} animation="fadeInLeft" duration={500}>
              <Image source={require('../assets/warning.png')} style={{height:20, width:20, marginRight:10}}></Image>
              <Text style={{color:'red',marginTop:30, textAlign:'center', maxWidth:300 }}>{this.state.passwordError}</Text>
              </Animatable.View>
            }
          </View>
          <TouchableOpacity onPress={() => this.navigation_pages('ForgotPwd')} >
            <Text style={{marginTop:30,fontSize:15,color: '#29837F',textAlign:'center', textDecorationLine:'underline'}}>
              Forgot Password? Click Here
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginTop:20}}>
          <TouchableOpacity onPress={() => this.Validator()} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200,padding:10, borderRadius:30 }}>
            {/* <TouchableOpacity onPress={() => navigate('Welcome')} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200,padding:10, borderRadius:30 }}> */}
              <Text style={{color:'white', fontSize:20,fontFamily: 'nunitosans-light',}}>Sign In</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigate('SignUp')} >
              <Text style={{marginTop:20,fontSize:15,color: '#29837F', textDecorationStyle:'solid'}}>
                New User? Please Register
              </Text>
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
export default LoginView