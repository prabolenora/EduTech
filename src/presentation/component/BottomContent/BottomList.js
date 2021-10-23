import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home/Home';
import { DrawerContent } from './BotomContent';
import Profile from '../profile/Profile';
import Payment from '../Payment/Payment';
import 'react-native-gesture-handler';
import
MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


export default BottomList = () => {

  return (

<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="home"
            color={color}
            size={size}
          />
        ),
      }} />
      </Tab.Navigator>
      </NavigationContainer>

      
  );
};
