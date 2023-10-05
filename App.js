import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Login from './Screens/login';
import Principal from './Screens/Principal';
import Config from './Screens/config';
import funcion from './Screens/funcion';
import RelatorioADM from './Screens/RelatorioADM';
import TelaADM from './Screens/TelaADM';
import { NavigationContainer } from '@react-navigation/native';



  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="config" component={Config} />
        <Stack.Screen name="RelatorioADM" component={RelatorioADM} />
        <Stack.Screen name="funcion" component={funcion} />
        <Stack.Screen name="TelaADM" component={TelaADM} />

      </Stack.Navigator>
    );
  }

  export default function App() {
    return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    );
  }
  
  