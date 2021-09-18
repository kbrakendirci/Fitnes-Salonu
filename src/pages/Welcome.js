import React from 'react'
import { SafeAreaView,Text,StyleSheet } from 'react-native';
import Button from '../components/Button/Button';

function Welcome({navigation}){
    function goToMemberSign(){
        navigation.navigate('Sign')
}
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fitness Salon</Text>
            <Button text= "üye kaydı " onPress={()=>goToMemberSign()}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

       
    },
    frame:{
        backgroundColor:'white',
        margin:40
    },
    header:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        margin:10,

    }
})
export default Welcome;