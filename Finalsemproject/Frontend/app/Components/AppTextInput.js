import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';




const AppTextInput=({icon,title, ...otherProps})=> {
    
  return(
  <View style={styles.container}>
  {icon ? <MaterialCommunityIcons  name={icon} color='#a278f4' size={30} ></MaterialCommunityIcons> : null }
  
  <TextInput {...otherProps}   ></TextInput>

  </View>


  )
}

const styles = StyleSheet.create({
  container: {
    width:340,
     flexDirection:'row',
    padding: 10,
    alignItems:'center',
    //  borderWidth:1,
    borderRadius:35,
    // borderBottomWidth:1.5,
    // borderBottomColor:"",
    height:50,
    marginVertical:10,
//  backgroundColor:"#DCDCDC",
  backgroundColor:"#f5f7f9"
    
  },
//   paragraph: {
//     margin: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
   
//   },
  textInput: {
    color: 'black',
    borderWidth:1,
    borderRadius:100,
   // backgroundColor:defaultStyles.colors.light,
    height:30

   },
});
export default AppTextInput;