import * as React from 'react';
import {  } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import NotificationScreen from '../Screen/NotificationScreen';
import OutPassScreen from '../Screen/OutpassScreen';
import ContactusScreen from '../Screen/ContactusScreen';
import WelcomeScreen from '../Screen/WelcomeScreen';

const Tab = createBottomTabNavigator();

 function TabNavigation({navigation}) {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Outpass" component={OutPassScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Notification" component={NotificationScreen} options={{headerShown:false}} />
        <Tab.Screen name="Contactus" component={ContactusScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Logout" component={WelcomeScreen} options={{headerShown:false}}
        myPress={() => navigation.navigate("WelcomeScreen")}/>
      </Tab.Navigator>
    
  );
}
export default TabNavigation