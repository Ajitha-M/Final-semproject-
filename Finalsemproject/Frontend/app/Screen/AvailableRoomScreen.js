import React, { useState } from 'react';
import { Button, Image, StyleSheet, View, Text,TouchableOpacity,FlatList } from 'react-native';
import Container from '../Components/Container';
    import { MaterialIcons } from "@expo/vector-icons";
const AvailableRoomScreen=()=>{
    const [genderIndex, setGenderIndex] = useState(0);   
    const genderList = ["Senthilandaver","Balamurugan","Velavan"];
    
    const genderChangeHandler = 
    (index) => {
      // console.log("index \t", index);
      setGenderIndex((preIndex) => index);
    }
    let data=[{
       "type":"AC",
        "room":"Room no1",
        "vaccent":"Vaccent",
    "button":"Allocated"    },
   {
        "type":"AC",
         "room":"Room no1",
         "vaccent":"Vaccent",
     "button":"Allocated"    },
     {
        "type":"AC",
         "room":"Room no1",
         "vaccent":"Vaccent",
     "button":"Allocated"    },
     {
        "type":"AC",
         "room":"Room no1",
         "vaccent":"Vaccent",
     "button":"Allocated"    },
     {
        "type":"AC",
         "room":"Room no1",
         "vaccent":"Vaccent",
     "button":"Allocated"    },
    {
        " type":"AC",
         "room":"Room no1",
         "vaccent":"Vaccent",
     "button":"Allocated"    },
     {
      "type":"AC",
       "room":"Room no1",
       "vaccent":"Vaccent",
   "button":"Allocated"    },
  {
      "type":"AC",
       "room":"Room no1",
       "vaccent":"Vaccent",
   "button":"Allocated"    },
   {
    "type":"AC",
     "room":"Room no1",
     "vaccent":"Vaccent",
 "button":"Allocated"    },
{
    "type":"AC",
     "room":"Room no1",
     "vaccent":"Vaccent",
 "button":"Allocated"    },
]
    
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:80}} >
            <Text>Select Hostel</Text>
        <View style={{ flexDirection: "row", }}>
            
        {genderList.map((data, index) => (
          <TouchableOpacity
            key={data}
            style={{
              flexDirection: "row",
              margin: 10,
            //   flex: 3,
            //   justifyContent: "space-evenly",
            }}
            onPress={genderChangeHandler.bind(this, index)}
          >
            <MaterialIcons
              name={
                index === genderIndex
                  ? "radio-button-checked"
                  : "radio-button-unchecked"
              }
              size={20}
              color='#ccc'
            />
            <Text style={styles.termsText}>{data}</Text>
          </TouchableOpacity>
        ))}
</View>

<FlatList
 contentContainerStyle={{ width:330,
  
 }}
        data={data}
        key={'2'}
        numColumns={2}
        renderItem={({item})=>(
        <Container text1={item.room} text2={item.vaccent}
         text3={item.type} title={item.button} ></Container>)}
      
      />
      
</View> 
    )}
    export default AvailableRoomScreen;

    const styles = StyleSheet.create({
        flex:1,
    })