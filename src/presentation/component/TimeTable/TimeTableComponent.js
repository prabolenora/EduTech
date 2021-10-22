import React, { Component, useContext ,useState} from 'react';
import { Button, Text, View, Icon, TouchableOpacity, Image, div, TextInput, } from 'react-native';
import { LoginContext } from '../../../Utils/LoginProvider';
import styles from './TimeTable.component.style';
import DatePicker from 'react-native-datepicker';


const TimeTableComponent = (props) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
   };
   const [date, setDate] = useState('09-10-2020');
  return (
    <View style={styles.outer_view}>
      <TextInput placeholder="Start Point" onChange={props.setPhoneNumber} />
      <TextInput placeholder="End Point" onChange={props.setPhoneNumber} />
      <DatePicker
          //style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2021"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            //setDate(date);
          }}
        />
      
      <Button title="ACTIVATE" onPress={props.TimeTable} />
    </View>

  );
};

export default TimeTableComponent;
