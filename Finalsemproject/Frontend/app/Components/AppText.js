//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text} from 'react-native';

//import WelcomeScreen from './screens/WelcomeScreen';

function AppText({title,subtitle, subtitle1,style, children}){
   return(
      
      <Text style={style}>
                  {title} 
                  {children} 
                  {subtitle}
                  {subtitle1}
      </Text>
     
     
   )
}




export default AppText;
