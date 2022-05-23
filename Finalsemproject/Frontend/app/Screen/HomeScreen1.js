import React, { useState } from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import AppButton from '../Components/AppButton'


const HomeScreen1=()=>{
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>RVS Group Hostel</Text>
            <Text style={styles.text1}>sulur,coimbatore</Text>
            </View>

            <View style={styles.container1}>
            <Text style={styles.text2}>Available Rooms</Text>
            <Text style={styles.text3}>20 Rooms Available</Text>
            <AppButton 
            style={styles.button} 
              title="Allocate"
              //onPress={handleSubmit}
              //myPress={() => navigation.navigate("Register")}
              >
                  
            </AppButton>
            </View>
            <View>
                {/* <Image source={require('../../assets/download.jpg')}></Image> */}
            </View>
            
     
        </>

    )

}
const styles = StyleSheet.create({

    container:{

        flex:0.5,
        
         paddingTop:40,
         fontWeight:'bold',
         marginRight:30,
         
    },
    container1:{
        flex:0.5,
        marginBottom:450,
        paddingBottom:90,
        borderRadius:20,
        width:356,
        height:800,
       
        backgroundColor:'#a278f4'   
     },
     container2:{
        flex:0.2,
        
        padding:130
,paddingBottom:50,
borderRadius:10,
marginTop:10,

alignContent:'center',
justifyContent:'center',
     backgroundColor:'red'   
     },
    text:{
        fontSize:30,
        fontWeight:'300',
        fontStyle:'normal',
        marginRight:60
       
    },
    text1:{
        fontSize:20,
        fontWeight:'300',
        fontStyle:'normal',
        //paddingTop:8,
    },
    text2:{
        fontSize:22,
        fontWeight:'300',
        fontStyle:'normal',
        paddingTop:18,
        marginLeft:10,
        color:'white',
    },
    text3:{
        fontSize:11,
        fontWeight:'300',
        fontStyle:'normal',
        paddingTop:8,
        marginLeft:10,
        color:'white',
    },
    button:{
        paddingTop:8,
        width:100,
        height:30,
        backgroundColor:"white",
        // color:'#a278f4',
    },
})
export default HomeScreen1;