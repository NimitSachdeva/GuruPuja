import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import TextField from "material-ui/TextField";

class Welcome extends React.Component{
    render(){
        return(
            // <ImageBackground source={require('./assets/Gradient-Wallpaper-for-Laptop.jpg')} style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'
            //     }}>
            //     <Text style={styles.setFontSize}>Welcome [Username]</Text>
                
            // </ImageBackground>
            <View style={{flex:1}}>
                <ImageBackground source={require('./assets/Gradient-Wallpaper-for-Laptop.jpg')} 
                style={{
                flexDirection:'column',
                paddingTop:60,
                justifyContent:'center',
                alignItems:'center',height:450,borderColor:'white',overflow:'hidden',justifyContent:'center',borderBottomLeftRadius:10, borderBottomRightRadius:10}} >
                <Image source={require("./assets/welcome.png")} style={{height:300, width:300}}></Image>
                <Text style={[styles.setFontSize,{fontSize: 50,marginBottom:50,color: 'white',}]}>[User]</Text>
                </ImageBackground>

                <View style={{ alignItems: 'center', marginTop:40}}>
                <Text style={[styles.setFontSize, {color:'black', fontSize:24}]}>Book the time Slots for Guru Puja</Text>
                    <TouchableOpacity style={{marginTop:20,justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:250,padding:10, borderRadius:30 }}>
                        <Text style={{color:'white', fontSize:25,fontFamily: 'nunitosans-light',}}>Click Here</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            
        );
    }
}

const styles= StyleSheet.create({
    setFontSize: {
        // flex:1,
        fontFamily: 'nunitosans-light',
        justifyContent:'space-between',
        // alignItems: 'center',
        textAlign:'center'
      },
    });
export default Welcome;