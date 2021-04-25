import React from 'react';
import { TextInput } from 'react-native';
import { Text } from 'react-native';
import { ImageBackground } from 'react-native';
import {View, Image, StyleSheet,ScrollView, TouchableOpacity } from "react-native";

class Profile extends React.Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{justifyContent:'center'}}>
                    <ImageBackground source={require('./assets/Gradient-Wallpaper-for-Laptop.jpg')} 
                    style={{ flexDirection:'column',
                    paddingTop:10,
                    marginBottom:40,
                    justifyContent:'center',
                    alignItems:'center',height:250,overflow:'hidden',justifyContent:'center',borderBottomLeftRadius:110}}>
                        {/* <View style={{backgroundColor:'white',marginVertical:60,flexDirection:'row',justifyContent:'center',alignItems:'center', height:120,width:120,padding:40,borderRadius:40 }}>
                        </View> */}
                        <Image source={require('./assets/profile.png')} style={{ width: 100, height: 100,  }} />
                        <Text style={styles.setFontSize}>Account Info</Text>
                    </ImageBackground>
                <ScrollView>
                    
                    <View style={styles.details}>
                        <Text style={styles.text}>Name</Text>
                        <TextInput style={styles.textInput}>Nimit</TextInput>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput style={styles.textInput}>nimit@vunsol.com</TextInput>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>Date of Guru Puja phase-2</Text>
                        <TextInput style={styles.textInput}>10/10/2020</TextInput>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput style={styles.textInput}>10/10/2020</TextInput>
                    </View>
                    <View style={{alignItems: 'center', marginTop:20, marginBottom:60}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200,padding:10, borderRadius:30 }}>
                            <Text style={{color:'white', fontSize:18,fontFamily: 'nunitosans-light',}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                </View>
            </View>
            
        );
    }
}

export default Profile;

const styles= StyleSheet.create({
    setFontSize: {
        fontSize: 35,
        // color: '#29837F',
        color:'white',
        // alignSelf:'flex-end',   
        fontFamily: 'nunitosans-light',
        textAlign:'center'
        // marginHorizontal:50
        },

    details:{
        // flexDirection:'row', 
        marginBottom:20,
        // flexWrap:'wrap'
    },
    text:{
        fontFamily: 'nunitosans-light',
        color: '#29837F',
        fontSize:18, 
        // fontWeight:'bold',
        marginHorizontal:20 
    },
    textInput: {
        padding:10,
        paddingLeft:20,
        marginTop:20,
        // flexDirection:'row',
        fontSize:15, 
        marginHorizontal:20,
        borderRadius:30,
        // borderColor:'#EFEFEF',
        // borderColor:'black',
        // borderWidth:2,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset:{
        width: 10,
        height: 2,
        },
        shadowOpacity: 11.17,
        shadowRadius: 1,
        elevation: 12,
    }
});      