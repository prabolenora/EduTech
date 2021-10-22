import React, { Component, useContext, useState } from 'react';
import { View } from 'react-native';
import TimeTableComponent from './TimeTableComponent';
import styles from './TimeTable.component.style';
import FirebaseUtil from '../../../Utils/FirebaseUtil';

function TimeTable() {

    const [phoneNumber, setPhoneNumber] = useState();

    const TimeTable = () => {
        alert('dsd');
    }

    return (
        <View style={styles.container}>
            <TimeTableComponent
                TimeTable={TimeTable}
                setPhoneNumber={setPhoneNumber}
            />
        </View>
    );


}

export default TimeTable;