import React, {useContext, useState}   from 'react';
import { Text,StyleSheet,View,ScrollView,TouchableOpacity} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import Screen from '../Components/Screen'
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import * as Yup from 'yup';
import { Formik } from 'formik';
import userApi from '../Api/user';
import AppError from '../Components/AppError'
import AuthContext from '../auth/Context';
import authApi from '../Api/auth';

// import {Dropdown } from ' react-native-element-dropdown';

let validationSchema  = Yup.object().shape({
    name : Yup.string().required().label('Name').min(1),
    mobileNo : Yup.number().required().label('mobileNo'),
    dept : Yup.string().required().label('Department'),
     whatsappNo : Yup.number().required().label('whatsappNo'),
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password'), });

const RegisterScreen = ({navigation}) => {

    const [genderIndex, setGenderIndex] = useState(0);   
    const genderList = ["Female","Male"];
    const genderChangeHandler = 
    (index) => {
      // console.log("index \t", index);
      setGenderIndex((preIndex) => index);
    }



    const authContext=useContext(AuthContext);
    const[error,setError]=useState();
  async function handleSubmit(userInfo){
     console.log(userInfo)
    const result=await userApi.register(userInfo)
  
  
  if(!result.ok){
    console.log(result);
    if(result.data) setError(result.data.error)//server processed our request
  
  
  else{
    //console.log('success')
    setError("An UnExpected error occured");
    console.log(result);
  }
  setTimeout(()=>{
    setError('')
  },3000);
  return;
  }
  

    // function authentication(values) {
    //     if (
    //           values.name === "Ajitha" &&
    //     //   values.department === "mca" &&
    //         //  values.regNo === "123" &&
    //         values.contact === "9003424176" &&
    //       values.email === "aji@gmail.com" &&
    //       values.password === "12345"
    //     ) {
    //       alert(`${values.email}  Login Successfully`);
    //       console.log(values.name);
    //       console.log(values.department);
    //       console.log(values.contact);
    //       console.log(values.regNo)
    //       console.log(values.email);
    //       console.log(values.password);
         
    //     } else {
    //       alert("Enter valid email or password");
    //     }
    //   }
  const [account, setaccount] = useState(name);


  const reg=await authApi.login(userInfo.email,userInfo.password)

if(reg.ok) {
  // navigation.navigate("Login")
  console.log(reg.data);
  authContext.setUser(userApi)
  authStorage.storeToken(reg.data)
  
}
else{
  console.log('error')
}

}
 return (
  //         // <Screen style={{padding:15}}>

  <Screen style={styles.container}>
  <Text style={styles.text}>Register</Text>
  
            <View style={styles.container1}>
              <ScrollView>
        <Formik 
  initialValues={{name:'',email:'', password:'',regNo:"",dept:"",mobileNo:"",whatsappNo:"", gender:""}}
    onSubmit={handleSubmit}

    // onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
      {/* <Text style={{fontSize:40,paddingBottom:100}}>Register</Text> */}
      <Text style={{ fontSize: 16, marginRight: 280 ,color:"#a278f4"}}>Username</Text>
                <AppTextInput
                      
                      placeholder='Name'
                      icon='account'
                      onChangeText={handleChange('name')}
                      onBlur={()=>setFieldTouched('name')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}
                       <Text style={{ fontSize: 16, marginRight: 280 ,color:"#a278f4"}}>Gender</Text>
<View style={{ flexDirection: "row" }}>
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



                       <Text style={{ fontSize: 16, marginRight: 270 ,color:"#a278f4"}}>Department</Text>
                       <AppTextInput
                      
                      placeholder='department'
                      icon='account'
                      onChangeText={handleChange('dept')}
                      onBlur={()=>setFieldTouched('dept')}
                     
                   // onChangeText={(text)=>setemail(text)}
                 />
                  {/* <Dropdown label="Select Item" data={data} onSelect={setSelected} /> */}
                     
                       {touched.dept && <AppError errors={errors.dept} />}
                       <Text style={{ fontSize: 16, marginRight: 280 ,color:"#a278f4"}}>ContactNo</Text>
                       <AppTextInput
                      
                      placeholder='contact'
                      icon='phone'
                      onChangeText={handleChange('mobileNo')}
                      onBlur={()=>setFieldTouched('mobileNo')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.mobileNo && <AppError errors={errors.mobileNo} />}
                       <Text style={{ fontSize: 16, marginRight: 270 ,color:"#a278f4"}}>WhatsappNo</Text>
                       <AppTextInput
                      
                      placeholder='whatsapp no'
                      icon='phone'
                      onChangeText={handleChange('whatsappNo')}
                      onBlur={()=>setFieldTouched('whatsappNo')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.whatsappNo && <AppError errors={errors.whatsappNo} />}

                       <Text style={{ fontSize: 16, marginRight: 310 ,color:"#a278f4"}}>Email</Text>
                       <AppTextInput
              icon='email'
              placeholder='Email'
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
                      
                        {touched.email && <AppError errors={errors.email} />}
                        <Text style={{ fontSize: 16, marginRight: 280 ,color:"#a278f4"}}>Password</Text>
                <AppTextInput
                   
                     placeholder='Password'
                     icon='lock'
                     secureTextEntry={true}
                     keyboard='numeric'
                     onChangeText={handleChange('password')}
                     onBlur={()=>setFieldTouched('password')}
                  // onChangeText={(text)=>setpassword(text)}
                 />
                        
                        {touched.password && <AppError errors={errors.password} />}


                        

                <AppButton
                style={styles.button}
                 title="Register" 
                   onPress={handleSubmit}
                // myPress={()=>console.log(email,password)} 
               myPress={() => navigation.navigate("Login")}

                 />
      </>
    )} 
   </Formik>
   </ScrollView>
   </View>

        </Screen>
      
    );
            }
  
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
  alignItems: 'center',
   // marginTop:0.1,
   padding: 10,
   backgroundColor: '#a278f4',
  
   // bord
  },
 container1: {
  
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:20,
   height:610,
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

 text:{
   alignItems:'center',
   justifyContent:'center',
   padding:40,
   fontSize:40,
   marginLeft:10,
   marginRight:30,
   // smarginBottom:30,
   color:'white',
   
   
   

}
  
})
// export const useRegister=()=>useContext(RegisterScreen)




// import React, { Component } from "react";
// import { Picker, View, Text, StyleSheet } from "react-native";
// import AppTextInput from "../components/AppTextInput";

// export default class CategoryScreen extends Component {
//   state = {
//     selectedcat: "",
//     category: [
//       {
//         itemName: "MCA"
//       },
//       {
//         itemName: "MSC"
//       },
//       {
//         itemName: "MBA"
//       },
//       {
//         itemName: "BBA"
//       },
//       {
//         itemName: "BSC"
//       },
//       {
//         itemName: "BCA"
//       }
//     ]
//   };

//   async onValueChangeCat(value) {
//     this.setState({ selectedcat: value });
//   }

//   render() {
//     return (
//       <View style={styles.viewStyle}>
//         {/* <View style={{ flex: 0.3 }}>
//           <Text style={styles.textStyle}>Categories</Text>
//         </View> */}
//         <View style={{ flex: 0.7, fontSize: 14 }}>
// {/*             
//         <AppTextInput
                   
//                                         placeholder='Password'
//                                         icon='lock'
//                                         secureTextEntry={true}
//                                         keyboard='numeric'
//                                         mode="dropdown"
//                                         style={styles.pickerStyle}
//             selectedValue={this.state.selectedcat}
//             onValueChange={this.onValueChangeCat.bind(this)}
//                                         // onChangeText={handleChange('password')}
//                                         onBlur={()=>setFieldTouched('password')}
//                                      // onChangeText={(text)=>setpassword(text)}
//                                     />
//                                             */}
//                                            {/* {touched.password && <AppError errors={errors.password} />} */}
//           <Picker
//             itemStyle={styles.itemStyle}
//             // mode="dropdown"
//             style={styles.pickerStyle}
//             selectedValue={this.state.selectedcat}
//             onValueChange={this.onValueChangeCat.bind(this)}
//           >
//           {this.state.category.map((item, index) => (
//               <Picker.Item
//                 color="#0087F0"
//                 label={item.itemName}
//                 value={item.itemName}
//                 index={index}
//               />
//             ))}
//           </Picker>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewStyle: {
//     flex: 1,
//     alignSelf: "center",
//     flexDirection: "row",
//     width: "92%",
//     justifyContent: "space-between",
//     alignItems: "center"
//   },
//   itemStyle: {
//     fontSize: 10,
//     fontFamily: "Roboto-Regular",
//     color: "#007aff"
//   },
//   pickerStyle: {
//     width: "100%",
//     height: 40,
//     color: "#007aff",
//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   },
//   textStyle: {
//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   }
// });

