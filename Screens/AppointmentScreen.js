
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { database } from '../firebaseDB';
import { ListItem, Badge, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const AppointmentScreen = ({ navigation }) => {

    const [Id, setId] = useState();
    const [user, setUser] = useState([]);

    const DeletePatient = item => {
        try{
            database().ref('user/' + item.Id)
            .remove()
            .then(() => { alert('Patient has been removed');})
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
                        onPress={() => 
                            Alert.alert("You have appointment with",
                            item.Name)
                            //alert(item.IC);
                        }
                        >
                          <Badge value={index+1} />
                          <ListItem.Content>
                          {/* <Text>{item.Name}</Text>
                          <Text>{item.Disease}</Text> */}
                          <ListItem.Title>
                              {item.Appointment}
                          </ListItem.Title>
                          {/* <ListItem.Subtitle>{item.Disease}</ListItem.Subtitle> */}
                          
                      </ListItem.Content>
                      
                      <ListItem.Chevron />
                      </ListItem>
                  ))}  
                
            </ScrollView>
        );
    
}

export default AppointmentScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333',
    },
    logoutButton:{
        marginVertical: 32,
      },
});