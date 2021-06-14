import React, {useEffect, useState} from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text} from 'react-native';
import { ListItem, Badge, Button, Header } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { database } from '../firebaseDB';
import Icon from 'react-native-ionicons';


const PatientList = ({navigation}) =>{
    
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
                            navigation.push('PatientDetailsScreen', item)
                            //alert(item.IC);
                        }
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

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    },
})