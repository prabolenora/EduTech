import React, { Component, useContext, useState } from 'react';
import { Button, View, TextInput, Text,Row , Image} from 'react-native';
import styles from './QR.component.style';


const QRComponent = () => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err)
    );

    return(
      <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>
                    Go to{' '}
                    <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    your computer and scan the QR code.
                </Text>
            }
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable}>
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    );
};
};

export default QRComponent;
