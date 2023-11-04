import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Login from './Screens/login';
import Principal from './Screens/Principal';
import Config from './Screens/config';
import ConfigFunc from './Screens/configFunc';
import funcion from './Screens/funcion';
import NovosFunc from './Screens/NovosFunc';
import RelatorioADM from './Screens/RelatorioADM';
import RelatorioFunc from './Screens/RelatorioFunc';
import TelaADM from './Screens/TelaADM';
import RecenteADM from './Screens/RecenteADM';
import { NavigationContainer } from '@react-navigation/native';
import Api from './src/Services/Api'; 
  
const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="config" component={Config} />
        <Stack.Screen name="configFunc" component={ConfigFunc} />
        <Stack.Screen name="RecenteADM" component={RecenteADM} />
        <Stack.Screen name="RelatorioADM" component={RelatorioADM} />
        <Stack.Screen name="RelatorioFunc" component={RelatorioFunc} />
        <Stack.Screen name="funcion" component={funcion} />
        <Stack.Screen name="NovosFunc" component={NovosFunc} />
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