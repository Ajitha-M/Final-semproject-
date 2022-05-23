import React from "react";
import { View, StyleSheet, Text,ScrollView } from "react-native";
import Screen from "../Components/Screen";
import AppTextInput from "../Components/AppTextInput";
// import AppText from "../components/AppText";

import AppButton from "../Components/AppButton";
//import {Dropdown} from "react-native-material-dropdown";
//import { Dropdown } from "react-native-element-dropdown";

let data=[{
  value:'female'
},
{
  value:'male'
}]

const OutPassScreen = ({navigation}) => {
  
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>OutPass</Text>
    
      <View style={styles.container1}>

     <ScrollView>
          

            {/* <Text style={{ fontSize: 15, marginRight: 280, color:"#a278f4" }}></Text> */}
            <AppTextInput
           // style={styles.apptextinput}
              // icon='email'
              placeholder='Student Name'
              // onChangeText={handleChange('email')}
              // onBlur={() => setFieldTouched('email')}
            />

            
            {/* <Text style={{ fontSize: 16, marginRight: 280 ,color:"#a278f4"}}>Password</Text> */}
            <AppTextInput
             
              placeholder='Department'
             
            />
            

             {/* <Dropdown
             label='Gender'
             data={data}
/>             */}
           
           <AppTextInput
             
             placeholder='Room Number'
            
           />
          <AppTextInput
             
             placeholder='address'
            
           />
           <AppTextInput
             
             placeholder='going time'
            
           />
           <AppTextInput
             
             placeholder='Return time'
            
           />
            <AppTextInput
             
             placeholder='Reason'
            
           />

           
           
            <AppButton style={styles.button} title="Apply "
            

              // myPress={handleSubmit}
            //   myPress={() => navigation.navigate("HomeScreen")}
              //  onPress={()=>console.log(email,password)}
              onPress={()=>console.log(working)} 
            />
            



          
          </ScrollView>
       
      
      </View>
    </Screen>
  )
}

export default OutPassScreen;

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // justifyContent: 'center',
   alignItems: 'center',
    // marginTop:0.1,
    padding: 10,
    backgroundColor: '#a278f4',
   
    // borderBottomLeftRadius:100
  },
  container1: {
   
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
     height:535,
    width:430,
    marginLeft:10,
     borderTopLeftRadius:50,
     borderTopRightRadius:50,
    
    //marginTop:0.1,
    //padding: 25,
    backgroundColor: 'white'
  },
  button:{
      width:300,
      height:50,
      backgroundColor:"#a278f4"
  },
  apptextinput:{
    width:200,

  },

  text:{
    alignItems:'center',
    justifyContent:'center',
    padding:60,
    fontSize:40,
    marginLeft:10,
    marginRight:30,
    // smarginBottom:30,
    color:'white',
    
    
    

}
 

})














































































//   return (
    
//       <Screen style={styles.container}>
//         <Text style={styles.text}>OutPassScreen</Text>
//         <ScrollView>
       
//         <View style={styles.container1}>
//         <Text style={{ fontSize: 16, marginRight: 350 ,color:"#874356"}}>Name</Text>
//           <AppTextInput
//              placeholder="Student Name"
//             keyboardType="default"
//           />
//         </View>
//         <View style={styles.continer1}> 
//        <Text style={{ fontSize: 16, marginRight: 320 ,color:"#874356"}}>Course</Text>
//           <AppTextInput
//              placeholder=""
//             keyboardType="default"
//           />
       
//           <Text style={{ fontSize: 16, marginRight: 320 ,color:"#874356"}}>Reason</Text>
//           <AppTextInput
//              placeholder=""
//             keyboardType="default"
//           />
       
//           <Text style={{ fontSize: 16, marginRight:80,marginLeft:10 ,color:"#874356",paddingRight:210}}>RelationShip</Text>
//           <AppTextInput
//             placeholder=""
//             keyboardType="default"
//           />
       
//           <Text style={{ fontSize: 16, marginRight:30,marginLeft:10 ,color:"#874356",paddingRight:210}}>Address of the person</Text>
//           <AppTextInput 
//        placeholder=""
//           keyboardType="default" />
       
//           <Text style={styles.text}>Date</Text>
//           <AppTextInput
//             placeholder=""
//             keyboardType="default"
//           />
//           <AppText style={{fontSize:16}}>Time of return</AppText>
//           <AppTextInput
//            placeholder=""
//             keyboardType="default"
//           />
          
//             <AppButton
//             style={styles.button}
//              title="Send"
//             //  myPress={() => navigation.navigate("HomeScreen")}
//             />
//               </View> 
//               </ScrollView>
//       </Screen>
    
//   );
// };

// export default OutPassScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex:0.5,
//    // justifyContent: 'center',
//   // alignItems: 'center',
//   // marginTop:50,
//   // marginTop:50,
//    padding:54,
//    paddingTop:20,
//    backgroundColor: '#a278f4',
  
//    // borderBottomLeftRadius:100
//  },
//  text:{
//   alignItems:'center',
//   justifyContent:'center',
//   padding:20,
//   fontSize:25,
//   marginLeft:10,
//   marginRight:30,
//   // smarginBottom:30,
//   color:'white',
// },

// container1: {
//    flex:0.5,
//   justifyContent: 'center',
//   alignItems: 'center',
//   //borderRadius:20,
//   height:850,
//   width:700,
//   // marginLeft:50,
//   // borderTopLeftRadius:250,
//   // borderTopRightRadius:280,
//  // paddingBottom:80,

//   //marginTop:0.1,
//   //padding: 100,
//   backgroundColor: 'white'
// },
//   // text:{
//   //   marginRight:350,
//   //   color:"#874356",
//   //   padding:6


//   // },
//   button:{
//     width:300,
//     height:50,
//     backgroundColor:"#a278f4"
// },
  
// });

