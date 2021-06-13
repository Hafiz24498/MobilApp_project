import React, { useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { FilledButton } from '../components/FilledButton';
import { Error } from '../components/Error';
import { IconButton } from '../components/IconButton';
import { Auth } from '../firebaseDB';

const RegistrationScreen = ({ navigation }) =>{

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  const Signup = (email, password) =>{
    try{
      Auth().createUserWithEmailAndPassword(email, password)
      .then (navigation.replace('Auth'));
  }catch(error){
      alert(error);
  }
  };


  // if (currentUser) {
    
  //     navigation.navigate('Auth');
    
  // }
  

  return (
  <View style={styles.container}>
    <IconButton 
      style={styles.closeIcon}
      name={'close-circle-outline'}
      onPress={() => { navigation.pop(); } }/>
    <Heading style={styles.title}>Sign Up</Heading>
    <Error error={''} />
    <Input style={styles.input} 
        onChangeText={(email) => setEmail(email)}
        placeholder= "Email" 
        keyboardType= "email-address"/>
    <Input style={styles.input} 
        onChangeText={(password) => setPassword(password)}
        placeholder= "Password" 
        secureTextEntry/>
    <FilledButton title={'Sign Up'} 
        style={styles.loginButton}
        onPress={() => Signup(email, password)}/>
    
  </View>
  );
}

export default RegistrationScreen;

const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingTop: 120,
    padding: 16,
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
  closeIcon:{
    position: 'absolute',
    top: 60,
    right: 16,
  },
});
