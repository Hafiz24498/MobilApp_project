import { database } from "../firebaseDB";

export const UpdatePatient =  (Name, Address, Age, BloodType, Disease,
    IC, Medicine, MobileNo, Id, Appointment) => {
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


