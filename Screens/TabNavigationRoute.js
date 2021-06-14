import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ionicons';
import { Button } from 'react-native-elements';
import { Auth, database } from '../firebaseDB';

import HomeScreen from './HomeScreen';
import PatientList from './PatientList';
import AppointmentScreen from './AppointmentScreen';
import AddPatientScreen from './AddPatientScreen';
import PatientDatailsScreen from './PatientDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SignOut = () => {
   try{
       Auth()
       .signOut()
        .then(navigation.replace('LoginScreen'));
    }catch(error){
        alert(error);
    }
};
const HomeScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName= "HomeScreen">
            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: 'purple',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <Button 
                            color="purple"
                            onPress={() => navigation.navigate('Auth')}
                            title="LogOut"
                            color="#fff"
                        />
                    )
                }}
            />
        </Stack.Navigator>
    );
};



const PatientListStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName= "PatientList">
            <Stack.Screen 
                name="PatientList"
                component={PatientList}
                options={{
                    title: 'Patient List',
                    headerStyle: {
                        backgroundColor: 'purple',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <Button 
                            color="purple"
                            onPress={() => navigation.navigate('AddPatientScreen')}
                            title="ADD"
                            color="#fff"
                        />
                    )
                }}
            />
            <Stack.Screen 
            name="AddPatientScreen"
            component={AddPatientScreen}
            options={{
                title: 'Add Patient',
                headerStyle: {
                    backgroundColor: 'purple',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
        <Stack.Screen 
            name="PatientDetailsScreen"
            component={PatientDatailsScreen}
            options={{
                title: ' Patient',
                headerStyle: {
                    backgroundColor: 'purple',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
        </Stack.Navigator>
    );
};

const AppointmentScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName= "AppointmentScreen">
            <Stack.Screen 
                name="AppointmentScreen"
                component={AppointmentScreen}
                options={{
                    title: 'Appointment',
                    headerStyle: {
                        backgroundColor: 'purple',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};

const TabNavigationRoute = () =>{

    return(
       
            <Tab.Navigator
                screenOptioms={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name == 'HomeScreen') {
                            iconName = focused
                            ? 'information-outline'
                            : 'information-circle-outline';
                        } else if (route.name == 'PatientList'){
                            iconName = focued ? 'list-circle-outline' : 'list-outline';
                        }
                    return (
                        <Icon name={iconName}  color={'purple'} /> );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}    
            >
                <Tab.Screen 
                    name="HomeScreen"
                    component={HomeScreenStack}
                />
                <Tab.Screen
                    name="PatientList"
                    component={PatientListStack}
                />
                <Tab.Screen 
                    name="AppointmentScreen"
                    component={AppointmentScreenStack}
                />
            </Tab.Navigator>
        
    );
};

export default TabNavigationRoute;