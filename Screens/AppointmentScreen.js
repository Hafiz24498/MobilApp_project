
import React, { useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const AppointmentScreen = ({ navigation }) => {

    
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Welcome to Doctor appointment </Text>
            <Button 
                title= "Go to Patient List"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    );
};

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