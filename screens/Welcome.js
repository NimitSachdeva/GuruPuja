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
                <ImageBackground source={require('../assets/guru_paduka_background.jpg')} 
                style={{
                flexDirection:'column',
                justifyContent:'flex-start',paddingTop:50,
                alignItems:'center',height:1000,borderColor:'white',overflow:'hidden',borderBottomLeftRadius:10, borderBottomRightRadius:10}} >
                <Image source={require("../assets/guru-paduka.png")} style={{height:250, width:250}}></Image>
                <Text style={[styles.setFontSize,{fontSize: 38,color: 'white',}]}>Welcome Nimit</Text>
                <View style={{flexDirection:'row', alignItems: 'center', flexWrap:'wrap',justifyContent:'center'}}>
                    {/* <Text style={[styles.setFontSize, {color:'white', fontSize:24}]}>Book the time Slots for Guru Puja</Text> */}
                    <TouchableOpacity onPress={() => navigate('Booking')} style={{margin:20,justifyContent:'center', alignItems:'center', width:150,height:150,borderRadius:5}}>
                        <Image source={require('../assets/booking.png')} style={{height:130, width:130}} />
                        <Text style={{color:'white', fontSize:15,fontFamily: 'nunitosans-bold',}}>Book Slots</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => navigate('Profile')} style={{margin:20,justifyContent:'center', alignItems:'center', width:150,height:150,borderRadius:5}}>
                        <Image source={require('../assets/profile-edit.png')} style={{height:130, width:130}} />
                        <Text style={{color:'white', fontSize:15,fontFamily: 'nunitosans-bold',}}>Edit Profile</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => navigate('Location')} style={{margin:20,justifyContent:'center', alignItems:'center', width:150,height:150,borderRadius:5}}>
                        <Image source={require('../assets/location.png')} style={{height:130, width:130}} />
                        <Text style={{color:'white', fontSize:15,fontFamily: 'nunitosans-bold',}}>Our Location</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => navigate('Home')} style={{margin:20,justifyContent:'center', alignItems:'center', width:150,height:150,borderRadius:5}}>
                        <Image source={require('../assets/Log_Out.png')} style={{height:130, width:130}} />
                        <Text style={{color:'white', fontSize:15,fontFamily: 'nunitosans-bold',}}>Log Out</Text>
                    </TouchableOpacity> 
                    
                    
                </View>
                {/* <View style={{marginTop:20}}>
                </View> */}
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