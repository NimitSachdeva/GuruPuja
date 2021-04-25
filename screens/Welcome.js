import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { withTheme } from 'react-native-elements';

class Welcome extends React.Component{
    render(){
        const { navigate } = this.props.navigation;
        return(
            // <ImageBackground source={require('./assets/Gradient-Wallpaper-for-Laptop.jpg')} style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'
            //     }}>
            //     <Text style={styles.setFontSize}>Welcome [Username]</Text>
                
            // </ImageBackground>
            <View style={{flex:1}}>
                <ImageBackground source={require('../assets/Gradient-Wallpaper-for-Laptop.jpg')} 
                style={{
                flexDirection:'column',
                justifyContent:'flex-start',paddingTop:50,
                alignItems:'center',height:800,borderColor:'white',overflow:'hidden',borderBottomLeftRadius:10, borderBottomRightRadius:10}} >
                <Image source={require("../assets/welcome.png")} style={{height:250, width:250}}></Image>
                <Text style={[styles.setFontSize,{fontSize: 48,color: 'white',}]}>Nimit</Text>
                <View style={{ alignItems: 'center', marginTop:120}}>
                    <Text style={[styles.setFontSize, {color:'white', fontSize:24}]}>Book the time Slots for Guru Puja</Text>
                    <TouchableOpacity onPress={() => navigate('Booking')} style={{marginTop:20,justifyContent:'center', alignItems:'center', backgroundColor:'white', width:250,padding:10, borderRadius:5 }}>
                        <Text style={{color:'#29837F', fontSize:25,fontFamily: 'nunitosans-bold',}}>Click Here</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{marginTop:20}}>
                    <TouchableOpacity onPress={() => navigate('Home')} >
                        <Text style={{fontSize:24,color: 'white'}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                {/* <View>
                    <TouchableOpacity onPress={() => navigate('Profile')} style={{justifyContent:'flex-end',alignItems:'center',backgroundColor:'white', padding:10,position:'relative', top:50,width:400}}>
                        <Text style={{color:'#5b79eb', fontSize:25,fontFamily: 'nunitosans-bold',}}>Edit Profile</Text>
                    </TouchableOpacity> 
                </View> */}
                
                </ImageBackground>
            </View>
            
        );
    }
}

const styles= StyleSheet.create({
    setFontSize: {
        // flex:1,
        fontFamily: 'nunitosans-light',
        textAlign:'center'
      },
    });
export default Welcome;