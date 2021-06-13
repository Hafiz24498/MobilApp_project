import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text} from 'react-native';
import { ListItem, Badge, Button } from 'react-native-elements';
import { set } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { database } from '../firebaseDB';

const PatientList = ({navigation}) =>{
    
    const [user, setUser] = useState([]);

    const DeletePatient = item => {
        try{
            database().ref('user/' + item.Id)
            .remove()
            .then(() => {})
        } catch(error) {
            alert(error);
        }
    }

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
                      <ListItem bottomDivider
                        onPress={() => {
                            navigation.navigate('PatientDetailsScreen',item.Id)
                            //alert(item.Id);
                        }}
                        >
                          <Badge value={index+1} />
                          <ListItem.Content>
                          {/* <Text>{item.Name}</Text>
                          <Text>{item.Disease}</Text> */}
                          <ListItem.Title>
                              {item.Name}
                          </ListItem.Title>
                          <ListItem.Subtitle>{item.Disease}</ListItem.Subtitle>
                          
                      </ListItem.Content>
                      <Button transparent onPress={() => DeletePatient(item)}>
                            <Icon active name="trash" color="red"/>
                        </Button>
                      <ListItem.Chevron />
                      </ListItem>
                  ))}  
                
            </ScrollView>
        );
    
}

export default PatientList;
