import React, { Component, useContext } from 'react';
import { Button, Text, View, Icon, TouchableOpacity } from 'react-native';
import { LoginContext } from '../../../Utils/LoginProvider';
import styles from './Home.component.style';
import Payment from '../Payment/Payment';
import { Drawer, Card, Title, Paragraph } from 'react-native-paper';

const HomeComponent = props => {
  const { user } = useContext(LoginContext);

  return (
    <View>

      <View style={styles.card}>
        <View >
          <Button onPress={() => props.signOut()} title="Log Out" />
        </View>
        <View style={styles.cardBottom}>
          <View><Card.Content >
            <Title>Credit Balance</Title>
            <Paragraph>2650.00 LKR</Paragraph>
          </Card.Content>
            <View style={styles.cardBottomSame}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('Payment')}>
                <Text h3
                  style={styles.topup2}>
                  Top Up
                </Text>
              </TouchableOpacity>
              <Image
                source={require('./../../../assets/card.png')}
                style={styles.Image}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => Drawer.navigate('Home')}>
                {/* <FontAwesome5 name="home" size={24} color="#00509d" /> */}

              </TouchableOpacity>
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


      <View style={styles.addButton}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}>
          {/* <FontAwesome5 name="home" size={24} color="#00509d" /> */}
          <Text style={styles.buttontext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Timetables')}
          activeOpacity={0.5}>
          {/* <MaterialCommunityIcons
            name="clipboard-flow-outline"
            size={24}
            color="#00509d"
          /> */}
          <Text style={styles.buttontext}> Timetables</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Trips')}
          activeOpacity={0.5}>
          {/* <MaterialIcons name="add-circle" size={55} color="#3bdefb" /> */}
          <Text style={styles.buttontext}> Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Payments')}
          activeOpacity={0.5}>
          {/* <Ionicons name="cash-outline" size={24} color="#00509d" /> */}
          <Text style={styles.buttontext}> Payments</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Seemore')}>
          {/* <MaterialIcons name="read-more" size={26} color="#00509d" />
          <Text style={{ color: '#00509d', fontSize: 8 }}>More</Text>
        </TouchableOpacity> */}
      </View>

    </View>
  );
};

export default HomeComponent;
