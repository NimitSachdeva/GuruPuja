import React,{ useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import moment from 'moment';
import { ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Booking = () => {
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
    };


    const [timeSlots, setTimeSlots] = React.useState([]);

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
            startTime.add(1, 'hours');
    
        }
        return arr;
    };
    
    React.useEffect(() => {
        setTimeSlots(createTimeSlots('8:00 AM', '8:00 PM'));
        // console.log(slots); 
    },[] )
    return(
        <ScrollView>
            <View style={{marginTop:60,marginBottom:50, textAlignVertical:'center'}}>
                <Text style={styles.setFontSize}>Choose your time slot</Text>
            </View>

            <View style={{marginBottom:20}}>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            </View>

            <View style={{flex:0.7,flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                {timeSlots.map((item,index) => (
                    <TouchableOpacity>
                        <Text key={index} style={styles.setSlotSize}>{item}
                            {timeSlots[index+1]? '-' +timeSlots[index+1]:''}
                        </Text>
                    </TouchableOpacity>
                ))}
                {/* <Text>8:00 am to 10:00 pm</Text> */}
            </View>
        </ScrollView>
        
    );
    
}

const styles= StyleSheet.create({
    setFontSize: {
        fontSize: 30,
        color: '#29837F',
        fontFamily: 'nunitosans-light',
        justifyContent:'space-between',
        // alignItems: 'center',
        textAlign:'center'
        },
    setSlotSize: {
        padding:10,
        margin:10,
        backgroundColor:'white',
        textAlignVertical:'center',
        // height:80,
        // width:130,
        // flexWrap:'wrap',
        color: '#29837F',
        fontFamily: 'nunitosans-bold',
        textAlign:'center'
      },
    });
export default Booking;