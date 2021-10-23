import React, { Component, useContext } from 'react';
import { Button, Text, View, Icon, TouchableOpacity,Image } from 'react-native';
import { LoginContext } from '../../../Utils/LoginProvider';
import styles from './Trip.component.style';
import Payment from '../Payment/Payment';
import { Drawer, Card, Title, Paragraph } from 'react-native-paper';

const TripComponent = props => {
  const { user } = useContext(LoginContext);

  return (
    <View>

      <View style={styles.card}>
      <Button onPress={() => props.signOut()} title="Log Out" />

        <View style={styles.cardBottom}>
          <View><Card.Content >
            <Title>Curent Trip</Title>
            <Paragraph>2650.00 LKR</Paragraph>
          </Card.Content>
            <View style={styles.cardBottomSame}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('Payment')}>
                <Text h3
                  style={styles.topup2}>
                  Helo akke
                </Text>
              </TouchableOpacity>
              <Image
                source={require('./../../../assets/card.png')}
                style={styles.Image}
              />
             
            </View>
            <Text h4 style={{ textAlign: 'center' }}>
            </Text>
          </View>
        </View>
        <View style={styles.cardBottom2}>
          <View>
            <View style={styles.cardBottomSame}>
            </View>
            <View style={styles.cardBottomSame}>
            </View>
          </View>
        </View>
        <Text h2>
          Recent Tours
        </Text>
        <View style={styles.cardBottom}>
          <View>
            <View style={styles.cardBottomSame}>
              {/* <Feather name="arrow-up" size={18} color="red" /> */}

            </View>
            <View style={styles.cardBottomSame}>
              {/* <Feather name="arrow-up" size={18} color="red" /> */}

            </View>

          </View>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <View style={styles.cardBottomSame}>
              {/* <Feather name="arrow-up" size={18} color="red" /> */}

            </View>
            <View style={styles.cardBottomSame}>
              {/* <Feather name="arrow-up" size={18} color="red" /> */}

            </View>
            <Text h4 style={{ textAlign: 'center' }}>
              {/* {`Rs. ${expense?.toFixed(2)}`} */}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardBottom}>

      </View>


      
    </View>
  );
};

export default TripComponent;
