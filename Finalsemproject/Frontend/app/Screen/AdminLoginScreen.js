import React, { useState,useContext } from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import AppTextInput from '../Components/AppTextInput';
import AppButton from '../Components/AppButton';
import Screen from '../Components/Screen';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AppText from '../Components/AppText';
import AppError from '../Components/AppError'
import authApi from '../Api/auth'
import AuthContext from '../auth/Context';
//import jwtDecode from 'jwt-decode'


let validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.number().required().label('Password')
});

const AdminLoginScreen = ({ navigation }) => {
  const auth=useContext(AuthContext);

  const handleSubmit =async({email,password})=>{
    const result = await authApi.login(email,password)
    if(result.ok){
      
       const user=jwtDecode(result.data) 
      //  authContext
       auth.setUser(user)
      // console.log(user)
      // console.log(result.data)
      authStorage.storeToken(result.data)
      
      }
      else{
        console.log(result.problem);
        
     }
   }
  



  

  // function authentication(values) {
  //   if (
  //     values.email === "ajitha71099@gmail.com" &&
  //     values.password === "1999"
  //   ) {
  //     alert(`${values.email}  Login Successfully`);
  //     console.log(values.email);
  //     console.log(values.password);
  //     navigation.navigate('Register')
  //   } else {
  //     alert("Enter valid email or password");
  //   }
  // }
    // const [email, setemail] = useState('');
    // const [password, setpassword] = useState('');
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>AdminLogin</Text>
    
      <View style={styles.container1}>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        // onSubmit={(values) => console.log(values)}
      // onSubmit={(values) => authentication(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>

            <Text style={{ fontSize: 15, marginRight: 280, color:"#a278f4" }}>Username</Text>
            <AppTextInput
              icon='email'
              placeholder='Email'
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />

            {touched.email && <AppError errors={errors.email} />}
            <Text style={{ fontSize: 16, marginRight: 280 ,color:"#a278f4"}}>Password</Text>
            <AppTextInput
              icon='lock'
              placeholder='Password'
              secureTextEntry={true}
              keyboard='numeric'
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            
            />

            {touched.password && <AppError errors={errors.password} />}

           
            <AppButton style={styles.button} title="Login"
            

              onPress={handleSubmit}
              myPress={() => navigation.navigate("HomeScreen1")}
              //  onPress={()=>console.log(email,password)}
              // onPress={()=>console.log(working)} 
            />
             <AppButton 
           style={styles.button} 
             
             title="Register"

 onPress={handleSubmit}
  myPress={() => navigation.navigate("Register")}
//  onPress={()=>console.log(email,password)} 
/>

          </>
        )}
      </Formik>
      </View>
    </Screen>
  )
}

export default AdminLoginScreen;

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
   height:600,
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
    padding:60,
    fontSize:29,
    marginLeft:10,
    marginRight:30,
    // smarginBottom:30,
    color:'white',
    
    
    

}
 

})
