import React,{ useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Alert, Image, ImageBackground } from 'react-native';
import moment from 'moment';
import { ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableHighlightComponent } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';


const Booking = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
        
        Alert.alert(
            "Date Confirmed",
            "Proceed with the time slot booking",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
      hideDatePicker();
        return(
            <Text>Selected Date is {date}</Text>
            );
    };


    const [timeSlots, setTimeSlots] = useState([]);

    const createTimeSlots = (fromTime, toTime) => {
        // alert(fromTime);
        let startTime = moment(fromTime, 'hh:mm A');
        let endTime = moment(toTime, 'hh:mm A');
        if(endTime.isBefore(startTime)){
            endTime.add(1, 'day')
        }
        let arr=[];
        while(startTime<=endTime){
            arr.push(new moment(startTime).format('hh:mm A'));
            startTime.add(0.5, 'hours');
        }
        return arr;
    };
    
    React.useEffect(() => {
        setTimeSlots(createTimeSlots('8:00 AM', '8:00 PM'));
        // console.log(slots); 
    },[] )
    return(
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{marginBottom:20, textAlignVertical:'center'}}>
                <ImageBackground source={require('../assets/Gradient-Wallpaper-for-Laptop.jpg')} 
                style={{
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',height:200,overflow:'hidden',justifyContent:'center',borderBottomLeftRadius:110}} >
                <Image source={require("../assets/booking.png")} style={{height:100, width:100}}></Image>
                <Text style={styles.setFontSize}>Choose Your Time Slots</Text>
                </ImageBackground>
            </View>

            <View style={{marginBottom:20, width:200,alignSelf:'center',}}>
            <TouchableOpacity onPress={showDatePicker}>
            <Text style={{backgroundColor:'#29837F', padding:10,borderRadius:50,textAlign:'center', color:'white', fontSize:20,fontFamily: 'nunitosans-light',}} >Choose the date</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />  
            </View>

            <ScrollView contentContainerStyle={{justifyContent:'center', alignItems:'center'}} >
                <View style={{flex:0.7,flexDirection:'row',flexWrap:'wrap'}}>
                {timeSlots.map((item,index) => (
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text key="{item}" style={styles.setSlotSize}>{item}
                            {timeSlots[index+1]? '- ' +timeSlots[index+1]:''}
                            {/* {timeSlots[index+1]} */}
                        </Text>
                    </TouchableOpacity>
                ))}
                </View>
                {/* <Text>8:00 am to 10:00 pm</Text> */}
            </ScrollView>
            <View style={{alignItems: 'center', marginTop:10, marginBottom:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={{justifyContent:'center', alignItems:'center', backgroundColor:'#29837F', width:200,padding:10, borderRadius:30 }}>
                <Text style={{color:'white', fontSize:18,fontFamily: 'nunitosans-light',}}>Save the slots</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        
    );
}

const styles= StyleSheet.create({
    setFontSize: {
        fontSize: 28,
        color: 'white',
        fontFamily: 'nunitosans-light',
        textAlign:'center'
        },
    setSlotSize: {
        padding:7,
        width:100,
        margin:10,
        fontSize:12,
        backgroundColor:'white',
        textAlignVertical:'center',
        borderColor:'#29837F',
        borderWidth:2,
        color: '#29837F',
        fontFamily: 'nunitosans-bold',
        textAlign:'center',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset:{
        width: 10,
        height: 2,
        },
        shadowOpacity: 11.17,
        shadowRadius: 21.49,
        elevation: 10,
      },
    });
export default Booking;