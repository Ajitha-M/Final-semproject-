import * as React from 'react';
import {  } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import OutPassScreen from '../Screen/OutpassScreen';
import ContactusScreen from '../Screen/ContactusScreen';
import AllocateRoomScreen from '../Screen/AllocateRoomScreen';
import AvailableRoomScreen from '../Screen/AvailableRoomScreen';
import HomeScreen1 from '../Screen/HomeScreen1';
import WelcomeScreen from '../Screen/WelcomeScreen';

const Tab = createBottomTabNavigator();

 function TabNavigation1() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home1" component={HomeScreen1} options={{headerShown:false}}/>
        <Tab.Screen name="AllocateRoom" component={AllocateRoomScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Notification" component={NotificationScreen} options={{headerShown:false}} />
        <Tab.Screen name="AvailableRoom" component={AvailableRoomScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Logout" component={WelcomeScreen} options={{headerShown:false}}
        myPress={() => navigation.navigate("WelcomeScreen")}/>
      </Tab.Navigator>
    
  );
}
export default TabNavigation1