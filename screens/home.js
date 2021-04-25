import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const home =({ navigation })=> {
    
    return (
        <ImageBackground source={require('../assets/Sri_Sri_Ravi_Shankar.jpg')} style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{width:'100%',paddingHorizontal:30,paddingVertical:110,height:'100%',backgroundColor:'rgba(255,255,255,0.65)',alignSelf:'center'}}>
                    <Image source={require('../assets/logo.png')} style={{height:130, width:290,alignSelf:'center'}} />
                    <Text style={styles.setFontSize}>Welcome to Guru Puja Mobile App</Text>
                    <View style={{flex:1,alignItems: 'center', marginTop:220}}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:'90%',padding:10 }}>
                            <Text style={{color:'white', fontSize:20,fontFamily: 'nunitosans-light',}}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent:'center', alignItems:'center',marginTop:20, }}>
                            <Text style={{marginTop:10,fontSize:18,color: '#29837F'}}>
                                Already have an Account? Log In
                            </Text>
                        </TouchableOpacity>
                    </View> 
                </View>
                
            </View>
        </ImageBackground>

    );
}
const styles= StyleSheet.create({
    setFontSize: {
        
        paddingTop:50,
        // flex:1,
        fontSize:30,
        color:'black',
        fontFamily: 'nunitosans-bold',
        // textAlignVertical:'center',
        textAlign:'center'
      },
    });
export default home;