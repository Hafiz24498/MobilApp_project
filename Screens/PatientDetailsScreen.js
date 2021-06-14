import React, { useState, Component} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { ThemeProvider, Button, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { database } from '../firebaseDB';
import { UpdatePatient } from '../service/DataService';

// class PatientDetailsScreen extends Component{
//     constructor(){
//         super();

//         this.state ={
//             Id: '',
//             Name: null,
//             Address: null,
//             Age: null,
//             Appointment: null,
//             BloodType: null,
//             IC: null,
//             Disease: null,
//             Medicine: null,
//             MobileNo: null,
//             user: []
//         }
//     }

//         componentDidMount(){
//             var ref = database().ref("user");

//             let query = ref.orderByChild("Id").equalTo(this.navigation.getParam('IC'));
//             query.once('value', (snapshot) =>{
//                 let data =snapshot.val();
//                 if(data){
//                     let firebaseData = Object.values(data);
//                     this.setState({user: firebaseData}, () =>{
//                         this.state.user.map((element) => {
//                             this.setState({
//                                 Name: element.Name,
//                                 Address: element.Address,
//                                 Age: element.Age,
//                                 Appointment: element.Appointment,
//                                 BloodType: element.BloodType,
//                                 IC: element.IC,
//                                 Disease: element.Disease,
//                                 Medicine: element.Medicine,
//                                 MobileNo: element.MobileNo
//                             });
//                         });
//                     });
//                 }
//             });
//         }
//     setName = (value) => {
//         this.setState({ Name: value});
//     }
//     setAddress = (value) => {
//         this.setState({ Address: value});
//     }
//     setAge = (value) => {
//         this.setState({ Age: value});
//     }
//     setAppointment = (value) => {
//         this.setState({ Appointment: value});
//     }
//     setBloodType = (value) => {
//         this.setState({ BloodType: value});
//     }
//     setDisease = (value) => {
//         this.setState({ Disease: value});
//     }
//     setIC = (value) => {
//         this.setState({ IC: value});
//     }
//     setMedicine = (value) => {
//         this.setState({ Medicine: value});
//     }
//     setMobileNo = (value) => {
//         this.setState({ MobileNo: value});
//     }

//    Savepatient = () => {
//        UpdatePatient(this.state.Name, this.state.Address, this.state.Age,
//             this.state.Appointment, this.state.BloodType, this.state.Disease,
//             this.state.IC, this.state.Medicine, this.state.MobileNo);
//    }

// render(){
//     return(
//         <ThemeProvider theme={ theme }>
//             <ScrollView style={styles.container}>
               
//                 <Input
//                     Icon={
//                         <Icon
//                             name='user-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                     }
//                     placeholder={'  Name'}
//                     value={this.state.Name}
//                     onChangeText={this.setName}
//                 />
//                 <Input
//                     Icon={
//                         <Icon
//                             name='user-o'
//                             size={20}
//                             color='#0085E6'
//                     />
//                 }
//                 placeholder={'  IC'}
//                 value={this.state.IC}
//                 onChangeText={this.setIC}
//                 disabled={true}
//                  />
//                 <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' Address'}
//                 value={this.state.Address}
//                 onChangeText={this.setAddress}
//                  />
//                  <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' Age'}
//                 value={this.state.Age}
//                 onChangeText={this.setAge}
//                  />
//                   <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' Appointment'}
//                 value={this.state.Appointment}
//                 onChangeText={this.setAppointment}
//                  /> 
//                  <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' BloodType'}
//                 value={this.state.BloodType}
//                 onChangeText={this.setBloodType}
//                  />
//                  <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' Disease'}
//                 value={this.state.Disease}
//                 onChangeText={this.setDisease}
//                  />
//                  <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' Medicine'}
//                 value={this.state.Medicine}
//                 onChangeText={this.setMedicine}
//                  />
//                  <Input
//                     Icon={
//                         <Icon
//                             name='envelope-o'
//                             size={20}
//                             color='#0085E6'
//                         />
//                 }
//                 placeholder={' MobileNo'}
//                 value={this.state.MobileNo}
//                 onChangeText={this.setMobileNo}
//                  />
//                  <Button 
//                     icone={ <Icon
//                                 name="check"
//                                 size={15}
//                             color='purple' />}
//                     title='  Add Patient'
//                     buttonStyle={{
//                         backgroundColor: "green"
//                     }}
//                     onPress={this.Savepatient}
//                  />
//                  {/* <Button 
//                     icone={ <Icon
//                                 name="users"
//                                 size={15}
//                             color='purple' />}
//                     title='  Go to Patient List'
//                     onPress={() => this.props.navigation.navigate('PatientList')}
//                     containerStyle={{
//                         marginTop: 10
//                     }}
//                  /> */}
//             </ScrollView>
//         </ThemeProvider>
//     );
//                 }
// }

const PatientDetailsScreen = ({navigation}) => {

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
                        placeholder={navigation.getParam('Name')}
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
                    placeholder={navigation.getParam('IC')}
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
                    placeholder={navigation.getParam('Address')}
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
                    placeholder={navigation.getParam('Age')}
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
                    placeholder={navigation.getParam('Appointment')}
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
                    placeholder={navigation.getParam('BloodType')}
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
                    placeholder={navigation.getParam('Disease')}
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
                    placeholder={navigation.getParam('Medicine')}
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
                    placeholder={navigation.getParam('MobileNo')}
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



export default PatientDetailsScreen;

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