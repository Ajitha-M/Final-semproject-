
import React from 'react';
import { StyleSheet, Text, SafeAreaView,Platform,StatusBar, View,Button, TouchableOpacity} from 'react-native';



function AppButton({title,myPress,style}){
   return(
      <TouchableOpacity
      style={[styles.container, style]}
      onPress={myPress}>
      
      <Text style={styles.text}
      >{title}</Text>
      </TouchableOpacity>
   )
}




export default AppButton;


const styles = StyleSheet.create({
    container:{
    borderRadius:30,
     justifyContent:'center',
     alignItems:'center',
    //  padding:10,
      width:260,
      //height:45,
    //  paddingRight:10,
    marginVertical:10,
    //  borderWidth:2,
     backgroundColor:"white",
     marginLeft:5
     
    },
    text:{
       //color:Colors.white,
       fontSize:20,
    //    textTransform:'uppercase',
       fontWeight:'bold',
 color:"white"
    }
});
