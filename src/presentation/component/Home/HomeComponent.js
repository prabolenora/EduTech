import React, { Component, useContext } from 'react';
import { Button, Text, View, Icon, TouchableOpacity } from 'react-native';
import { LoginContext } from '../../../Utils/LoginProvider';
import styles from './Home.component.style';

const HomeComponent = props => {
  const { user } = useContext(LoginContext);

  return (
    <View>

      <View style={styles.card}>
        <Text>Home: {user?.email}</Text>
        <Button onPress={() => props.signOut()} title="Log Out" />
        <View style={styles.cardTop}>

          <Text style={{ textAlign: 'center', color: 'aliceblue' }}>
            Card Payments
          </Text>
          <Text h3 style={{ textAlign: 'center', color: 'aliceblue' }}>
          </Text>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <View style={styles.cardBottomSame}>
              {/* <Feather name="arrow-down" size={18} color="green" /> */}
              <Text
                style={{
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Income
              </Text>
            </View>
            <Text h4 style={{ textAlign: 'center' }}>
              {/* {`Rs. ${income?.toFixed(2)}`} */}
            </Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <View style={styles.cardBottomSame}>
              {/* <Feather name="arrow-up" size={18} color="red" /> */}
              <Text style={{ textAlign: 'center', marginLeft: 5 }}>
                Expense
              </Text>
            </View>
            <Text h4 style={{ textAlign: 'center' }}>
              {/* {`Rs. ${expense?.toFixed(2)}`} */}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.recentTitle}>
        <Text h4 style={{ color: 'black' }}>
          Recent Tours
        </Text>
      </View>
      <View style={styles.recentTransactions}>
        <Text h4 style={{ color: 'black' }}>
          Promos
        </Text>
        {/* {filter?.slice(0, 3).map((info) => ( */}
        {/* <View key={info.id}>
                <CustomListItem
                  info={info.data}
                  navigation={navigation}
                  id={info.id}
                />
              </View>
            ))} */}
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
