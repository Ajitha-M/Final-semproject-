import React from "react";
import { View, StyleSheet, Text,ScrollView,Image } from "react-native";
import AppButton from "../Components/AppButton";

const ContactusScreen = ({navigation}) => {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Instructions:</Text>
            <Text style={styles.text1}>Student can apply outpass from morning 7:00 am to evening 4:00 pm. 
            You can simply fill the form and wait for the warden approval and also you should return inside 
            on before the mentioned time in the form</Text>
            
        </View>
        <View style={styles.container2}>
            <View style={{flexDirection:'row',paddingTop:0,height:80,marginBottom:40,marginTop:0}}>
              
        <Image  style={styles.image} source= {require('../../assets/icon.png')}></Image>
        <View style={{flex:0.5,marginBottom:40}}>
        <Text  style={styles.text4}>Warden </Text>
        <View>
        <Text style={{fontSize:10,marginLeft:10}}>Rvs group, sulur</Text>
        <Text style={{fontSize:12,marginLeft:10,alignItems:'center',paddingBottom:20,paddingTop:30,color:'#a278f4'}}>Contact Information:</Text>
        <Text style={{fontSize:12,marginLeft:10,alignItems:'center',paddingBottom:10,paddingTop:1}}>PhNo:9890876754</Text>
        <Text style={{fontSize:12,marginLeft:10,alignItems:'center',paddingBottom:10,paddingTop:1}}>wpno:9890876754</Text>
        <Text style={{fontSize:12,marginLeft:10,alignItems:'center',paddingBottom:10,paddingTop:1}}>Email:email.com</Text>
        </View>
        </View>
        </View>
        
        </View>
        <View style={styles.container1}>
            
            <Text style={styles.text2}>Apply for OutPass</Text>
            <Text style={styles.text3}>fill out the form</Text>
            <AppButton 
            style={styles.button} 
              title="Apply-->" 
              //onPress={handleSubmit}
              myPress={() => navigation.navigate("Outpass")}
              >
                  
            </AppButton>
            </View>
        </>
        )
    }
export default ContactusScreen;

const styles = StyleSheet.create({
    container:{
        flex:0.5,
        paddingBottom:0,
        marginBottom:20,
        marginTop:30,
        padding:10,
        height:110,
        width:370,
      
        },
    text:{
        paddingTop:10,
        // paddingBottom:40,
        //width:110,
      //  paddingLeft:1,
        fontSize:30,
       // marginLeft:5,
        marginRight:140,
        color:'#a278f4'
    },
    text1:{
       paddingTop:6,
       paddingBottom:1,
        marginBottom:7,
        fontSize:13,
        paddingLeft:9,
       marginTop:5,
        color:'black'
    },
    container1:{
        flex:0.5,
        padding:20,
     marginBottom:30,
        paddingBottom:60,
        borderRadius:20,
        width:356,
        height:800,
      
       
        backgroundColor:'#a278f4'   
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
        paddingTop:2,
        width:110,
        height:30,
        backgroundColor:"pink",
        
        
        // color:'#a278f4',
    },
    image:{
        height:80,
        width:80,
        marginLeft:15,
        marginBottom:70,
        
    },
    container2:{
        flex:0.5,
        backgroundColor:'#F5F5F5',
        paddingTop:50,
        paddingBottom:120,
        marginBottom:50,
        marginTop:30,
       // height:180,
        width:340,
        borderRadius:10
    },
    text4:{
        fontSize:25,
        marginLeft:10
    },
    container3:{
        flex:0.5,
        marginBottom:30,
        marginTop:10
        //backgroundColor:'green',
        //width:800
    }



})

