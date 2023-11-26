import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useToken from './../services/useToken';
import useId from '../services/useId';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [employees, setEmployees] = useState([]);

    const tokenSaved = useToken();

    const idSaved = useId();

    useEffect(() => {
      // Função para buscar os funcionários da API
      const fetchEmployees = async () => {
        try {
            
          const response = await fetch('http://192.168.0.106:8080/funcionarios', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + tokenSaved.myToken,
            }
          }) ;
          const data = await response.json();
          setEmployees(data);
          console.log(setEmployees);
        } catch (error) {
          console.error('Erro ao buscar funcionários:', error);
        }

        console.log(data.employees);
        
 
      };
  
      fetchEmployees();
    }, []); // O
   
  const HomeADM = () => {
    navigation.navigate('HomeADM');
  };
  const Cadastro = () => {
    navigation.navigate('Cadastro');
  };
  const TelaADM = () => {
    navigation.navigate('TelaADM');
  };
    return (
        <View style={styles.container}>
         <ScrollView>
        {employees.map((employee) => (
          <View key={employee.id} style={[styles.textContainer, styles.whiteBackground]}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: employee.avatarUrl }} style={styles.profileImage} />
              <Text style={styles.employeeName}>{employee.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

            <Text>{'\n'}</Text>

            <View style={styles.bottomButtonsContainer}>
               
        <TouchableOpacity style={styles.bottomButton} onPress={TelaADM}>
        <Ionicons name="people-outline" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={HomeADM}>
        <Ionicons name="home" size={45} color="orange" style={styles.bottomButtonText}/>
      </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Cadastro}>
          <Ionicons name="add-circle-sharp" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    textContainer: {
        paddingBottom: 5,
        marginBottom: 30,
    },
    employeeName: {
        fontSize: 18,
        padding: 15,
        color: 'white'
    },
    profileImageContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        aspectRatio: 4.5,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'orange',
        backgroundColor: 'orange'
    },
    profileImage: {
        width: '17%',
        height: '105%',
        borderRadius: 100,
        justifyContent: 'center',
        paddingBottom: 5,
        borderWidth: 2, 
        borderColor: 'white'
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
   
});

export default HomeScreen;

