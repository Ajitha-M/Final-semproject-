import React, { useState,useContext } from 'react';
import { Button, Image, StyleSheet, View, Text ,ScrollView} from 'react-native';


const NotificationScreen = () => {
   
    return (
        <>
  <ScrollView>
        <View style={styles.container}>
            <Text style={styles.text}>You have recevied few notifications</Text>
        </View>
      
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Dtae:19/4/22</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:20,paddingTop:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was Rejected</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Dtae:19/4/22</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Dtae:10/5/22</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
        </View>
        
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Dtae:19/5/22</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/warden.png')}></Image>
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Dtae:27/5/22</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',padding:10,paddingBottom:10,backgroundColor:'#F5F5F5',height:100,borderRadius:10}}>
        <Image  style={styles.image} source= {require('../../assets/icon.png')}></Image>
        <View>
            <Text style={{fontSize:20,marginLeft:10,padding:5}}>Warden</Text>
            <Text style={{fontSize:15,marginLeft:10,}}>Your outpass was accepted</Text>
        </View>
        </View>
        
        {/* <View style={styles.container2}>
            <View style={{flexDirection:'row',paddingTop:0,height:80,marginBottom:40,marginTop:0,color:'gray'}}>
              
        <Image  style={styles.image} source= {require('../../assets/icon.png')}></Image>
        <View style={{flex:0.5,marginBottom:40}}>
        <Text  style={styles.text4}>Warden </Text>
        </View>
        </View>
        </View> */}
</ScrollView>
        </>
        )
    }
 
 
export default NotificationScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        padding:30,
        paddingBottom:17,
        paddingTop:40,
        fontSize:18,
        marginStart:1,
        marginRight:17
    },
    container2:{
        flex:0.25,
        backgroundColor:'#F5F5F5',
        paddingTop:50,
        paddingBottom:110,
        marginBottom:110,
        marginTop:10,
       // height:180,
        width:340,
        borderRadius:10
    },
    text4:{
        fontSize:25,
        marginLeft:10
    },
    image:{
        height:70,
        width:70,
        marginLeft:15,
        marginBottom:70,
        
    },

})
