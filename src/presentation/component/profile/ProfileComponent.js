import React, {Component, useState} from 'react';
import {Button, Alert, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from './Profile.component.style';

const ProfileComponent = (props) => {

    const selectOption = () => {

        Alert.alert(
            'Choose...',
            '',
            [
              {text: 'Take Photo...', onPress: () => props.captureImage('photo')},
              {text: 'Choose from Library...', onPress: () => props.chooseFile('photo'), 
              style: 'cancel'},
            ],
            { 
              cancelable: true 
            }
          );        

      }

    return (
        <View>
        <View style={styles.viewStyle}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => selectOption()}
          >
              <Image
          source={{uri: props.filePath.uri}} 
          style={styles.imgStyle}/>
              </TouchableOpacity>
        </View>

        <TextInput
        placeholder="Email" editable={false} selectTextOnFocus={false}
        value={props.email? props.email: ''}
        onChangeText={props.setEmail}
        style= {styles.textInput}
        />
      
        <TextInput
        placeholder = "Full Name"
        onChangeText={props.setFullname}
        value={props.fullname? props.fullname:''}
        style= {styles.textInput}
        />
        
        <TextInput style= {styles.textInput}
        placeholder="Address"
        onChangeText={props.setAddress}
        value={props.address? props.address: ''}
        />
            <Button
            title ="Update"
            onPress={props.handleUpdate}
            />

        
      </View>
    );
}

export default ProfileComponent