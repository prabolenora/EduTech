'use strict';

import React, { Component } from 'react';

import {
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function QR() {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    return (
        <View style={styles.container}>
            
        </View>
    );
}


export default QR;