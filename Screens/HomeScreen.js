import React, { useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {

    
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Welcome to Doctor Care </Text>
            {/* <Text>{navigation.getParam.email}</Text> */}
            <Button 
                title= "Go to Patient List"
                onPress={() => navigation.navigate('AddPatientScreen')}
            />
        </View>
    );
};

export default HomeScreen;

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