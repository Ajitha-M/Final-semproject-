import React from 'react'
import {StyleSheet, View,Image,Text,Platform, Button, Alert} from 'react-native'
import AppButton from '../Components/AppButton'


const WelcomeScreen = ({navigation}) =>{

    var login=() => {
       
        console.log("Login btn clicked")
        // Alert.alert('alert','login yes or no',
        // [
        //   {text:'YES',onPress:()=>console.log('yes')},
        //   {text:'NO',onPress:()=>console.log('no')}
        // ]
        // )
    } 
    var register=() => {
     
        console.log("Register btn clicked")
        // Alert.alert('alert','register yes or no',
        // [
        //   {text:'YES',onPress:()=>console.log('yes')},
        //   {text:'NO',onPress:()=>console.log('no')}
        // ]
        // )
    } 
      
return(
    
    <View style={styles.container}>

    <View style={styles.imageContainer}>
    <Text style={styles.text}>Welcome To </Text> 
    <Text style={styles.text1}>Hostel Management</Text> 
    {/* <Image source={require('../../assets/Hostel.jpeg')}></Image> */}
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/Hostel.jpeg')}></Image>
    </View>
    
    <AppButton 
    style={styles.button}  
    title='Student Login'
      
     myPress={() => navigation.navigate("Login")}
    >
    </AppButton>
    <AppButton  style={styles.button} title='Warden Login'
     myPress={() => navigation.navigate("AdminLogin")}></AppButton>
    {/* <AppButton title="STUDENT LOGIN" 

    
     myPress={login}
    //   myPress={() => navigation.navigate("Login")}
      />

    <AppButton title="WARDEN LOGIN" 
    
    myPress={register} 
    style={{backgroundColor:'#4ECDC4'}}
    // myPress={() => navigation.navigate("WardenLogin")}
    /> */}
 
    </View>
    
)
}


export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:20,
        alignItems:"center",
        justifyContent:"center",
           backgroundColor:"white",
        //  padding: Platform.OS==='android'?50:0

    },
    text:{
        fontSize:30,
        fontWeight:"bold",
        alignContent:"center",
        alignSelf:"center",
          // paddingBottom:10,
           color:"#a278f4",
         paddingTop:40,
       // paddingLeft:160
    },
    text1:{
        fontSize:30,
        fontWeight:"bold",
        alignContent:"center",
        alignSelf:"center",
        color:"#a278f4",
       // paddingLeft:100
    },
    button:{
        padding:10,
        width:300,
        paddingRight:10,
        backgroundColor:"#a278f4",
        color:'white'

    },
    image:{
        padding:20,
        height:500,
        width:500,  
    },
    // imageContainer:{
    //     position:'absolute',
    //     top:80,
    //     alignItems:'center'
    // }

});
