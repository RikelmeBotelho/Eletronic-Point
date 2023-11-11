import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/princip';

import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useToken from './../services/useToken';
import useId from '../services/useId';
/*
function TextBox({ hora }) {

  return (
    <View style={styles.textBoxContainer}>
      <Text style={styles.textBoxValue}>{hora}</Text>
      <View style={styles.quadradoA} />
    </View>
  );
}*/

export default function HomeADM() {
  
  const navigation = useNavigation();
  
/*
  const [dadosAPI, setDadosAPI] = useState({
    apelido: '',
    horarioEntrada: '',
    horarioIntervaloEntrada: '',
    horarioIntervaloSaida: '',
    horarioSaida: ''
  });
  const idSaved = useId();

  const id = (idSaved);

  fetch(`http://192.168.1.5:8080/funcionarios/${id.myId}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    horaEntrada: dadosAPI.horarioEntrada, 
    horarioIntervaloEntrada: dadosAPI.horarioIntervaloEntrada,
    horarioIntervaloSaida: dadosAPI.horarioIntervaloSaida,
    horarioSaida: dadosAPI.horarioSaida,

    inputData: inputData,
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Dados enviados com sucesso:', data);
})
.catch(error => {
  //console.error('Erro ao enviar dados para a API:', error);
});



  const token = useToken();

  const navigation = useNavigation();
  
  const [inputData, setInputData] = useState([]);
  const [horasRegistradas, setHorasRegistradas] = useState([]);
  const [registrado, setRegistrado] = useState(null);
  const [contadorPressaoBotao, setContadorPressaoBotao] = useState(0);
  const [t, setT] = useState();*/
  const Cadastro = () => {
    navigation.navigate('Cadastro');
  };
  const HomeADM = () => {
    navigation.navigate('HomeADM');
  };
  const TelaADM = () => {
    navigation.navigate('TelaADM');
  };

  
/*
  const registrarHora = () => {

    if (contadorPressaoBotao < 4) {
      const dataAtual = new Date();
      
      const horaEntrada = dataAtual.getHours().toString().padStart(2, '0') + ':' + dataAtual.getMinutes().toString().padStart(2, '0');
      const horarioIntervaloEntrada = dataAtual.getHours().toString().padStart(2, '0') + ':' + dataAtual.getMinutes().toString().padStart(2, '0');
      const horarioIntervaloSaida = dataAtual.getHours().toString().padStart(2, '0') + ':' + dataAtual.getMinutes().toString().padStart(2, '0');
      const horarioSaida = dataAtual.getHours().toString().padStart(2, '0') + ':' + dataAtual.getMinutes().toString().padStart(2, '0');
      
      // Atualize o estado dadosAPI com a hora de entrada
      setDadosAPI(prevState => ({
        ...prevState,
        horarioEntrada: horaEntrada,
        horarioIntervaloEntrada: horarioIntervaloEntrada,
        horarioIntervaloSaida: horarioIntervaloSaida,
        horarioSaida: horarioSaida

      }));
    }}
    
   
      
      console.log("token recuperado: " + token.myToken)*/
      
      

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>

        <Image
          source={require('../assets/leticia.jpeg')}
          style={styles.profileImage}
      />
      </View>

      <Text style={styles.title}>Leticia Moura</Text>
      
      <View style={styles.orangeBall} />
      <View style={styles.secondBall} />

      <View style={styles.bottomButtonsContainer}>
    
        

        <TouchableOpacity style={styles.bottomButton} onPress={TelaADM}>
        <Ionicons name="people-outline" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={HomeADM}>
        <Ionicons name="home" size={45} color="white" style={styles.bottomButtonText}/>
      </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Cadastro}>
          <Ionicons name="add-circle-sharp" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>
            
      </View>

    </View>
    
  );
};