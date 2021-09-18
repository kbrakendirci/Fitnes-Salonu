/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';
import Sign from './src/pages/Sign';
import MemberResult from './src/pages/MemberResult';

const Stack = createNativeStackNavigator();


function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} 
     options={{
       headerShown: false,
      }}/>
      <Stack.Screen name="Sign" component={Sign}/>
      <Stack.Screen name="MemberResult" component={MemberResult}/>
       
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;
