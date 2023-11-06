import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/princip';
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

  const Relatorio = () => {
    navigation.navigate('RelatorioADM');
  };
  const Config = () => {
    navigation.navigate('config');
  };
  const funcion = () => {
    navigation.navigate('funcion');
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
        <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
          <Text style={styles.bottomButtonText}>Relatório</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={Config}>
          <Text style={styles.bottomButtonText}>Config</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
          <Text style={styles.bottomButtonText}>Funcionários</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={TelaADM}>
          <Text style={styles.bottomButtonText}>TelaADM</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.version}>Vs 0.0.1</Text>
    </View>
    
  );
};