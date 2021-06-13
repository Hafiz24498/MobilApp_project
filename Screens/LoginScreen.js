import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { TextButton } from '../components/TextButton';
import { Error } from '../components/Error';
import { Auth } from '../firebaseDB';

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  const Login = (email, password) => {
    try{
      Auth().signInWithEmailAndPassword(email, password)
      .then (navigation.replace('TabNavigationRoute'));
  }catch(error){
      alert(error);
  }
  };

  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  
  // const Login = (email, password) =>{
  //   try{
  //     firebaseConfig.auth().signInWithEmailAndPassword(email, password)
  //     .then (navigation.replace('TabNavigationRoute'));
  //   } catch(error){
  //     alert(error);
  //   }
  // }

  return (
  <View style={styles.container}>
    <Heading style={styles.title}>Login</Heading>
    <Error error={''} />
    <Input style={styles.input}
        onChangeText={(email) => setEmail(email)} 
        placeholder= "Email" 
        keyboardType= "email-address"/>
    <Input style={styles.input}
        onChangeText={(password) => setPassword(password)}
        placeholder= "Password" 
        secureTextEntry/>
    <FilledButton title={'Login'} 
        style={styles.loginButton}
        onPress={() => Login(email, password)}/>
    <TextButton title={'Have you an account? Sign up'}
        onPress={() => {
          navigation.navigate('RegistrationScreen')
        } }/>
  </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingTop: 120,
    padding: 20,
    alignItems: 'center',
    
  },
  title:{
    marginBottom: 32,
  },
  input: {
      marginVertical: 8,
  },
  loginButton:{
    marginVertical: 32,
  },
});