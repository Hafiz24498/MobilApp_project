import 'react-native-gesture-handler'
import * as React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import TabNavigationRoute from './Screens/TabNavigationRoute';

const Stack = createStackNavigator();

const Auth = () => {

    return ( 
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{headerShown: false}}  
        />
      </Stack.Navigator>
        
    );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        
        <Stack.Screen 
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="TabNavigationRoute"
          component={TabNavigationRoute}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}



