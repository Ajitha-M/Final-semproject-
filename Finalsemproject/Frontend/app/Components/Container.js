import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import AppButton from './AppButton'
function Container({text1,text2,text3,title}) {
  return (
    <View style={styles.container}>
        <View style={{width:40,height:40,borderRadius:50,backgroundColor:'#a278f4',alignItems:'center',justifyContent:'center'}}>
        <Text>{text3}</Text>
        </View>
         <Text>{text1}</Text>
         <Text>{text2}</Text>
<AppButton 
            style={styles.button} 
              title={title}
             
              ></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems:'center',justifyContent:'center',borderRadius:20,backgroundColor:'silver',
  width:140,height:150,
},
  button:{
    paddingTop:8,
    width:100,
    height:40,
    backgroundColor:"#a278f4",
    // color:'#a278f4',
},
});

export default Container;