import React, { useState } from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import AppButton from '../Components/AppButton'


const HomeScreen=({navigation})=>{
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Arts and Science Hostel</Text>
            <Text style={styles.text1}>sulur,coimbatore</Text>
            </View>

            <View style={styles.container1}>
            <Text style={styles.text2}>Apply for OutPass</Text>
            <Text style={styles.text3}>fill out the form</Text>
            <AppButton 
            style={styles.button} 
              title="Apply"
              //onPress={handleSubmit}
              myPress={() => navigation.navigate("Outpass")}
              >
                  
            </AppButton>
            </View>
            {/* <View style={styles.container2}>
            <Image style={styles.image} resizeMode='contain' source= {require('../../assets/hostel1.jpg')}></Image>
            </View> */}
            <View>
                {/* <Image source={require('../../assets/download.jpg')}></Image> */}
            </View>
            
     
        </>

    )

}
const styles = StyleSheet.create({

    container:{

        flex:0.5,
        
         paddingTop:70,
         fontWeight:'bold',
         marginRight:30,

         
    },
    container1:{
        flex:0.5,
        marginBottom:270,
        paddingBottom:100,
        borderRadius:20,
        width:356,
        height:840,
        marginTop:200,
       
        backgroundColor:'#a278f4'   
     },
     container2:{
        flex:0.2,
        
        padding:130
,paddingBottom:60,
borderRadius:10,
marginTop:20,

alignContent:'center',
justifyContent:'center',
     backgroundColor:'red'   
     },
    text:{
        fontSize:30,
        fontWeight:'300',
        fontStyle:'normal',
       
    },
    image:{
        padding:10,
        height:300,
        width:350, 
        paddingTop:50,
        marginBottom:60 ,
        marginLeft:5,
        marginTop:10
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
        paddingTop:9,
        width:100,
        height:40,
        backgroundColor:"#AA98A9",
        // color:'#a278f4',
    },
})
export default HomeScreen;