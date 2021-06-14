import React, { useState} from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Text} from 'react-native';
import { ThemeProvider, Button, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { database } from '../firebaseDB';



const AddPatientScreen = ({navigation}) => {

    const [Id, setId] = useState();
    const [Name, setName] = useState();
    const [Address, setAddress] = useState();
    const [Age, setAge] = useState();
    const [Appointment, setAppointment] = useState();
    const [BloodType, setBloodType] = useState();
    const [IC, setIC] = useState();
    const [Disease, setDisease] = useState();
    const [Medicine, setMedicine] = useState();
    const [MobileNo, setMobileNo] = useState();
    const [User, setUser] = useState();
    
    const Savepatient = (Id, Name, Address, Age, Appointment,
        BloodType, IC, Disease, Medicine, MobileNo) =>{
            try{
                let key;
                if(Id != null){
                    key =Id;
                } else{
                    key = database()
                        .ref()
                        .push().key;
                }
                let dataSave={
                    Id: key,
                    Name: Name,
                    Address: Address,
                    Age: Age,
                    Appointment: Appointment,
                    BloodType: BloodType,
                    IC: IC,
                    Disease: Disease,
                    Medicine: Medicine,
                    MobileNo: MobileNo,
                };
                database().ref('user/' + key).update(dataSave)
                .then (navigation.navigate('PatientList'));
            } catch(error){
                alert(error);
            }
    };
    
        return(
            <ThemeProvider theme={ theme }>
                <ScrollView style={styles.container}>
                   
                    <Input
                        Icon={
                            <Icon
                                name='user-o'
                                size={20}
                                color='#0085E6'
                            />
                        }
                        placeholder={'  Name'}
                        value={Name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Input
                        Icon={
                            <Icon
                                name='user-o'
                                size={20}
                                color='#0085E6'
                        />
                    }
                    placeholder={'  IC'}
                    value={IC}
                    onChangeText={(text) => setIC(text)}
                     />
                    <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' Address'}
                    value={Address}
                    onChangeText={(text) => setAddress(text)}
                     />
                     <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' Age'}
                    value={Age}
                    onChangeText={(text) => setAge(text)}
                     />
                      <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' Appointment'}
                    value={Appointment}
                    onChangeText={(text) => setAppointment(text)}
                     /> 
                     <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' BloodType'}
                    value={BloodType}
                    onChangeText={(text) => setBloodType(text)}
                     />
                     <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' Disease'}
                    value={Disease}
                    onChangeText={(text) => setDisease(text)}
                     />
                     <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' Medicine'}
                    value={Medicine}
                    onChangeText={(text) => setMedicine(text)}
                     />
                     <Input
                        Icon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#0085E6'
                            />
                    }
                    placeholder={' MobileNo'}
                    value={MobileNo}
                    onChangeText={(text) => setMobileNo(text)}
                     />
                     <Button 
                        icone={ <Icon
                                    name="check"
                                    size={15}
                                color='purple' />}
                        title='  Add Patient'
                        buttonStyle={{
                            backgroundColor: "green"
                        }}
                        onPress={() => Savepatient(Id, Name, Address, Age, Appointment,
                            BloodType, IC, Disease, Medicine, MobileNo)}
                     />
                     {/* <Button 
                        icone={ <Icon
                                    name="users"
                                    size={15}
                                color='purple' />}
                        title='  Go to Patient List'
                        onPress={() => this.props.navigation.navigate('PatientList')}
                        containerStyle={{
                            marginTop: 10
                        }}
                     /> */}
                </ScrollView>
            </ThemeProvider>
        );
    
}

export default AddPatientScreen;

const theme = {
    Button: {
        raised: true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

