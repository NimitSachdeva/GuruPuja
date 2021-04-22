import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import TextField from "material-ui/TextField";

class Welcome extends React.Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'
                }}>
                <Text style={styles.setFontSize}>Welcome [Username]</Text>
                <TouchableOpacity style={{marginTop:40,justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:250, height:30, padding:30 }}>
                 <Text style={{color:'white', fontSize:20,fontFamily: 'nunitosans-light',}}>Book Slots</Text>
                </TouchableOpacity> 
            </View>
            
        );
    }
}

const styles= StyleSheet.create({
    setFontSize: {
        // flex:1,
        fontSize: 60,
        // fontWeight : 'bold' ,
        color: '#29837F',
        fontFamily: 'nunitosans-light',
        justifyContent:'space-between',
        // alignItems: 'center',
        textAlign:'center'
      },
    });
export default Welcome;