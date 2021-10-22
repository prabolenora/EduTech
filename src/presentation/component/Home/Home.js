import React, {Component, useContext} from 'react';
import { View } from 'react-native';
import HomeComponent from './HomeComponent';
import styles from './Home.component.style';
import FirebaseUtil from '../../../Utils/FirebaseUtil';

function Home({navigation}) { 

    signOut = () => {
        FirebaseUtil.signOut().catch((e) => {
            console.log(e);
            alert("Something went wrong");
        });
    }


        return (
            <View style = {styles.container}>
                <HomeComponent  
                signOut = {this.signOut}
                navigation={navigation}
                />

            </View>
        );
    

}
export default Home;