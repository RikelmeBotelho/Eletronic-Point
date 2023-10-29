import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';

const Cadastro = () => {

    const navigation = useNavigation();

    const Home = () => {
        navigation.navigate('Principal');
      };
      const Relatorio = () => {
        navigation.navigate('RelatorioADM');
      };
      const Config = () => {
        navigation.navigate('config');
      };
      const funcion = () => {
        navigation.navigate('funcion');
      };
      const Cadastro = () => {
        navigation.navigate('Cadastro');
      };

      return (

          <View style={styles.bottomButtonsContainer}>
    
            <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
              <Ionicons name="document-text-outline" size={45} color="orange" style={styles.bottomButtonText}/>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.bottomButton} onPress={Home}>
              <Ionicons name="home" size={45} color="orange" style={styles.bottomButtonText}/>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.bottomButton} onPress={Config}>
              <Ionicons name="person-circle-outline" size={45} color="orange" style={styles.bottomButtonText}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomButton} onPress={Cadastro}>
       
              <Ionicons name="add-circle-sharp" size={45} color="orange" style={styles.bottomButtonText}/>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
              <Ionicons name="people-outline" size={45} color="orange" style={styles.bottomButtonText}/>
            </TouchableOpacity>
    
          </View>
        
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        
      },
      profileImageContainer: {
        backgroundColor: 'orange',
        borderRadius: 300,
        padding: 10,
        position: 'fixed',
        marginBottom: -45,
        height: 220,
        width: 220,
        margin: 70,
        top: -70
      },
      profileImage: {
          height: 200,
          width: 200, 
          aspectRatio: 1, 
          borderRadius: 100,
      },
      textBoard: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 3,
        marginBottom: 10,
      },
      label: {
        color: '#555',
        marginBottom: 5,
      },
      boldText: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
      input: {
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 80,
        padding: 7,
        marginTop: 2,
        color: '#1f1f1e',
        paddingLeft: 15
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
      },
      flex1: {
        flex: 1,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
      },
      button: {
        flex: 1,
        backgroundColor: 'orange',
        borderRadius: 25,
        padding: 10,
        paddingLeft: 5,
        alignItems: 'center',
        paddingTop: 13,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        bottom: -12,
        padding: 10,
      
      },
    });
    
export default Cadastro;
