import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text} from 'react-native';
import { ListItem, Badge, Button } from 'react-native-elements';
import { set } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { database } from '../firebaseDB';

const PatientList = ({navigation}) =>{
    
    const [user, setUser] = useState();

    useEffect(() => {
        const userRef=database().ref('/user');
        const OnLoadingListener = userRef.on('value', snapshot =>{
            setUser([]);
            snapshot.forEach(function (childSnapshot)  {
                setUser(user=>[...user,childSnapshot.val()])
            })
        });
        return() => {
            userRef.off('value', OnLoadingListener)
        }
    }, [])

        return(
            <ScrollView>
                
                  {user.map((item, index) =>(
                      <ListItem>
                          <Text>{item.Name}</Text>
                          <Text>{item.Disease}</Text>
                      </ListItem>
                  ))}  
                
            </ScrollView>
        );
    
}

export default PatientList;