import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import{Animated}from 'react-native'
import LoginScreen from '../Screen/LoginScreen';
import WelcomeScreen from '../Screen/WelcomeScreen';
import RegisterScreen from '../Screen/RegisterScreen'
import HomeScreen from '../Screen/HomeScreen';
import DrawerNavigation from './DrawerNavigation';
import TabNavigation from './TabNavigation';
import OutPassScreen from '../Screen/OutpassScreen';
import TabNavigation1 from './TabNavigation1';
import AdminLoginScreen from '../Screen/AdminLoginScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={TabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name="Outpass" component={OutPassScreen} options={{headerShown:false}}/>

        <Stack.Screen name="Home1" component={TabNavigation1} options={{headerShown:false}}/>
      <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{headerShown:false}}/>
      
    </Stack.Navigator>
  );
}
export default StackNavigation