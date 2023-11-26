import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/princip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useToken from './../services/useToken';
import useId from '../services/useId';
import usePointRegister from '../services/intern-storage/usePointRegister';


function TextBox({ hora }) {

  return (
    <View style={styles.textBoxContainer}>
      <Text style={styles.textBoxValue}>{hora}</Text>
      <View style={styles.quadradoA} />
    </View>
  );
}

export default function Principal() {

  const navigation = useNavigation();

  const idSaved = useId();
  const id = (idSaved);

  const token = useToken();


  const [contadorCliques, setContadorCliques] = useState(0);
  const [horariosCapturados, setHorariosCapturados] = useState([]);
  const [enviar, setEnviar] = useState(false);
  const [btnRegistrarBloqueado, setBtnRegistrarBloqueado] = useState(false);
  const [pointRegister, setPointRegister] = useState(null);
  

  const getPointRegister = async() =>{

    try {

      const pointRegisterJson = await AsyncStorage.getItem('myPointRegister');
      
      const pointRegisterObj = pointRegisterJson != null ? JSON.parse(pointRegisterJson) : null;

      obj = pointRegisterObj;
      setPointRegister(obj);

    } catch (e) {
      console.log('error usePointRegister: ' + e.message);
    }

  }

  const savePointRegister = async (pointRegister) => {

    try {
      
      const pointRegisterJson = JSON.stringify(pointRegister);
      
      await AsyncStorage.setItem('myPointRegister', pointRegisterJson);
  
      console.log("horário salvo!");
  
    } catch (e) {
  
      console.log("Erro ao salvar dados de registro: " + e.message);
  
    }
  
  }

  //Remove dados salvos localmente
  deletePointRegister = async () => {
    try {
      await AsyncStorage.removeItem('myPointRegister')
    } catch(e) {
      console.log(`Erro na remoção ${e.message}`);
    }
  
    console.log('Removido')
  }



  // Add cliques
  const capturarHorario = () => {

    if (contadorCliques < 4) {

      const horarioAtual = new Date().toLocaleTimeString();

      setHorariosCapturados([...horariosCapturados, horarioAtual]);
      setContadorCliques(contadorCliques + 1);
      

      // Bloquear/desbloquear botão
      setBtnRegistrarBloqueado(true);

      setTimeout(function() {

        setBtnRegistrarBloqueado(false);

      }, 3000);


    }

    console.log("horarios: " + horariosCapturados);
    
  };

  // Salva o Registro de ponto localmente
  useEffect(() => {

    if (contadorCliques === 1) {

      const data = {
        horarioEntrada: horariosCapturados[0],
        horarioIntervaloEntrada: horariosCapturados[1],
        horarioIntervaloSaida: horariosCapturados[2],
        horarioSaida: horariosCapturados[3],
        ssidAtual: "abc123",
        idFuncionario: id.myId,
      };

      savePointRegister(data);

    } else if (contadorCliques > 1 && contadorCliques <= 4) {

      const dataAtualizado = {
        horarioEntrada: horariosCapturados[0],
        horarioIntervaloEntrada: horariosCapturados[1],
        horarioIntervaloSaida: horariosCapturados[2],
        horarioSaida: horariosCapturados[3],
        ssidAtual: "abc123",
        idFuncionario: id.myId,
    };

      if(contadorCliques === 4) setEnviar(true);

      savePointRegister(dataAtualizado);

    }

    getPointRegister();
    //viewDataSaved();


  }, [contadorCliques, horariosCapturados]);


  //Exibe registro salvo na tela
  const viewDataSaved = () => {

    //let obj = pointRegister;
    console.log("último registro: " + pointRegister.horarioEntrada)//JSON.stringify(pointRegister))
    
  }

 // Envia os dados p/ a API
 const enviarDados = () => {

  fetch('http://192.168.0.109:8080/registro-ponto', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token.myToken,
    },
    body: JSON.stringify({

      horarioEntrada: horariosCapturados[0],
      horarioIntervaloEntrada: horariosCapturados[1],
      horarioIntervaloSaida: horariosCapturados[2],
      horarioSaida: horariosCapturados[3],
      ssidAtual: "abc123",
      idFuncionario: id.myId,

    }),
  })
  .then(response => {
    console.log("cliques: " + contadorCliques)
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {

    console.log('Dados enviados com sucesso:', data);

    setContadorCliques(0);
    setHorariosCapturados([]);
    setEnviar(false);

    deletePointRegister();

    setTimeout(function() {

      getPointRegister();
  
    }, 3000);

  })
  .catch(error => {
    console.error('Erro ao enviar dados para a API:', error.message);
  });

}
 
  
 
 



 
  //Navigate
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


   

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>

        <Image
          source={require('../assets/leticia.jpeg')}
          style={styles.profileImage}
      />
      </View>

      <Text style={styles.title}>Leticia Moura</Text>

      
      <TouchableOpacity
        style={[
          styles.button,
          contadorCliques >= 4 && styles.disabledButton,
        ]}
        onPress={capturarHorario}
        disabled={btnRegistrarBloqueado === true}
      >
        <Text style={styles.buttonText}>Registrar Hora</Text>
      </TouchableOpacity>

      
      { enviar == true && (
      
      <TouchableOpacity
              style={[
                styles.button,
                contadorCliques == 3 && styles.disabledButton,
              ]}
              onPress={enviarDados} >

            <Text style={styles.buttonText}>Finalizar</Text>
     
     </TouchableOpacity>
       
       )}

  
      <View style={[styles.textBoxRow, { flexDirection: 'row' }]}>
        { pointRegister && pointRegister.horarioEntrada != null && (<TextBox hora={pointRegister?.horarioEntrada ?? ''} /> )}
        { pointRegister && pointRegister.horarioIntervaloEntrada != null && (<TextBox hora={pointRegister?.horarioIntervaloEntrada ?? ''} />)}
        { pointRegister && pointRegister.horarioIntervaloSaida != null && (<TextBox hora={pointRegister?.horarioIntervaloSaida ?? ''} />)}
        { pointRegister && pointRegister.horarioSaida != null && (<TextBox hora={pointRegister?.horarioSaida ?? ''} />)}
      </View>


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

      <Text style={styles.version}>Vs 0.0.3</Text>
    </View>
    
  );
};