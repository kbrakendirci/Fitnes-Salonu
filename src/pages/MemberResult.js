import React from 'react';
import { View, Text,TextInput,onChangeText,StyleSheet,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useReducer } from 'react/cjs/react.production.min';

function MemberResult({route}){
    const {user} =route.params;
return(

    <View style={styles.frame}>
    <Text style={styles.label}>Üye adı:{user.userName}</Text>
    <Text style={styles.label}>Üye Soyadı:{user.userSurName}</Text>
    <Text style={styles.label}>Üye Yaş:{user.userAge}</Text>
    <Text style={styles.label}>Üye E-Posta:{user.userMail}</Text>
    <Text style={styles.label}>Üye Memleket:{user.userCity}</Text>
    </View>

);
}
const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:20,
        margin:5,

    },
    frame:{
        backgroundColor:'white',
        margin:10, 
        width:'94%',
        height:'95%'
        
        
    },
})

export default MemberResult;
