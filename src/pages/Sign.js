
import { SafeAreaView, Text, View, Alert } from 'react-native';

import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';



function Sign({ navigation }) {
    const [userName, setUserName] = useState('');
    const [userSurName, SetUserSurName] = useState('null');
    const [userAge, SetUserAge] = useState('null');
    const [userMail, SetUserMail] = useState('null');
    const [userCity, SetUserCity] = useState('null');

    console.log('name', userName);

    function handleSubmit() {
        if (!userName || !userSurName || !userAge || !userMail || !userCity) {
            Alert.alert('fitness Salonu', 'Bilgi');
        }
        const user = {
            userName,
            userSurName,
            userAge,
            userMail,
            userCity,
        };
        navigation.navigate('MemberResult', { user });



    }

    return (
        <SafeAreaView>
            <Text>
               
            </Text>
            <Input label="Üye adı" placeholder="Üye İsmini Giriniz.." onChangeText={(e)=>setUserName(e)} />
            <Input label="Üye Soyaadı" placeholder="Üye Soyadını Giriniz.." onChangeText={SetUserSurName} />
            <Input label="Üye Yaş" placeholder="Üyenin Yaşını Giriniz.." onChangeText={SetUserAge} />
            <Input label="Üye Eposta" placeholder="Üyenin E-Posta adresini Giriniz.." onChangeText={SetUserMail} />
            <Input label="Memleket" placeholder="Üyenin Doğum Yerini Giriniz.." onChangeText={SetUserCity} />
            <View style={{alignItems:'center'}}><Button text="Kaydı Tamamla" onPress={() => handleSubmit()} /></View>

        </SafeAreaView>
    );
}
export default Sign;