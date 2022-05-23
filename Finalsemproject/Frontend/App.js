import { StatusBar } from 'expo-status-bar';
import React from 'react' 
import { StyleSheet, Text, View,requireNativeComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ContactusScreen from './app/Screen/ContactusScreen';
import HomeScreen from './app/Screen/HomeScreen';
import LoginScreen from './app/Screen/LoginScreen';
import NotificationScreen from './app/Screen/NotificationScreen';
import RegisterScreen from './app/Screen/RegisterScreen';
import WelcomeScreen from './app/Screen/WelcomeScreen';
import StackNavigation from './app/Navigation/StackNavigation'
import HomeScreen1 from './app/Screen/HomeScreen1';
import OutPassScreen from './app/Screen/OutpassScreen';
import AdminLoginScreen from './app/Screen/AdminLoginScreen';
import AllocateRoomScreen from './app/Screen/AllocateRoomScreen';
import AvailableRoomScreen from './app/Screen/AvailableRoomScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <RegisterScreen></RegisterScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <HomeScreen></HomeScreen> */}
      {/* <OutPassScreen></OutPassScreen> */}
      {/* <NotificationScreen></NotificationScreen> */}
      {/* <ContactusScreen></ContactusScreen>  */}
      {/* <HomeScreen1></HomeScreen1> */}
      {/* <AdminLoginScreen></AdminLoginScreen> */}
      {/* <AllocateRoomScreen></AllocateRoomScreen> */}
      <AvailableRoomScreen></AvailableRoomScreen>
      <StatusBar style="auto" />
    </View>
    // <NavigationContainer>
    //   <StackNavigation></StackNavigation>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
