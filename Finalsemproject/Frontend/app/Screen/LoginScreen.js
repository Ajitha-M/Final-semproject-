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
// import jwtDecode from 'jwt-decode'


let validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.number().required().label('Password')
});

const LoginScreen = ({navigation}) => {
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
      <Text style={styles.text}>Login</Text>
    
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
              myPress={() => navigation.navigate("Home")}
              //  onPress={()=>console.log(email,password)}
              // onPress={()=>console.log(working)} 
            />
             <AppButton 
           style={styles.button} 
             
             title="Register"

 onPress={handleSubmit}
   myPress={() => navigation.navigate("Register")}
 //myPress={()=>console.log(email,password)} 
/>

          </>
        )}
      </Formik>
      </View>
    </Screen>
  )
}

export default LoginScreen;

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
   height:580,
  width:410,
  marginLeft:10,
   borderTopLeftRadius:60,
   borderTopRightRadius:60,
  
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
    fontSize:40,
    marginLeft:10,
    marginRight:30,
    // smarginBottom:30,
    color:'white',
    
    
    

}
 

})














































// import React, { useState } from 'react';
// import { Button, Image, StyleSheet, View, Text } from 'react-native';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import Screen from '../components/Screen';
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// import AppError from '../components/AppError'


// let validationSchema = Yup.object().shape({
//   email: Yup.string().required().email().label('Email'),
//   password: Yup.number().required().label('Password')
// });

// const LoginScreen = ({ navigation }) => {

// //   function authentication(values) {
// //     if (
// //       values.email === "ajitha71099@gmail.com" &&
// //       values.password === "1999"
// //     ) {
// //       alert(`${values.email}  Login Successfully`);
// //       console.log(values.email);
// //       console.log(values.password);
// //     } else {
// //       alert("Enter valid email or password");
// //     }
// //   }
// //     const [email, setemail] = useState('');
// //     const [password, setpassword] = useState('');
//   return (
//     <Screen style={styles.container}>

//       <Formik
//         initialValues={{ email: '', password: '' }}
//         // onSubmit={authentication(values)}
//          onSubmit={(values) => console.log(values)}
//         validationSchema={validationSchema}
//       >
//         {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//           <>

//             <Text style={{ fontSize:15, marginRight:300 }}>User Name</Text>
//             <AppTextInput
//               icon='email'
//               placeholder='Email'
//               onChangeText={handleChange('email')}
//               onBlur={() => setFieldTouched('email')}
//             // onChangeText={(text)=>setemail(text)}
//             />

//             {touched.email && <AppError errors={errors.email} />}
//             <Text style={{ fontSize: 15, marginRight: 300 }}>Password</Text>
//             <AppTextInput
            
//               icon='lock'
//               placeholder='Password'
//               secureTextEntry={true}
//               keyboard='numeric'
//               onChangeText={handleChange('password')}
//               onBlur={() => setFieldTouched('password')}
//             // onChangeText={(text)=>setpassword(text)}
//             />

//             {touched.password && <AppError errors={errors.password} />}
//             <AppButton style={styles.button}  title='Student Login'></AppButton>
//             <Text style={{ fontSize:20 }}>Forgot Password ?</Text>

//             <Text style={{ fontSize:20 }}>Dont have an account 
//             <Button title='CREATE'
//             backgroundColor=""></Button>
//             </Text>

           
//             {/* <AppButton title="LOGIN"
        

//               // myPress={handleSubmit}
//             //   myPress={() => navigation.navigate("HomeScreen")}
//             //   onPress={()=>console.log(email,password)} 
//             /> */}
//              {/* <AppButton  title="Register"

// // myPress={handleSubmit}
//  myPress={() => navigation.navigate("Register")}
// //  onPress={()=>console.log(email,password)} 
// /> */}
//           </>
//         )}
//       </Formik>
//     </Screen>
//   )
// }

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     //marginTop:0.1,
//     padding: 25,
//      backgroundColor: 'skyblue'
//   },
//   image: {
//     height: 130,
//     width: 130,
//     justifyContent: 'center',
//     marginBottom: 30
//   },
//   button:{
//     padding:13,
//     width:400,
//     paddingRight:10,
//     backgroundColor:"white"

// },

// })
