import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/princip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
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

  
  //const [profileImage, setProfileImage] = useState(null);
  
  const tokenSaved = useToken();

  const [dadosAPI, setDadosAPI] = useState({
    nomeCompleto: '',
    apelido: '',
    urlImagem: '',
  });

  const navigation = useNavigation();

  const idSaved = useId();
  const id = (idSaved);

  const token = useToken();


  const [contadorCliques, setContadorCliques] = useState(0);
  const [horariosCapturados, setHorariosCapturados] = useState([]);
  const [enviar, setEnviar] = useState(false);
  const [btnRegistrarBloqueado, setBtnRegistrarBloqueado] = useState(false);
  const [pointRegister, setPointRegister] = useState(null);
  const [connState, setConnState] = useState({
    type: "",
    isConnected: false,
    details: null, // Adicionado para armazenar os detalhes da conexão
  });
  
  // Dados do funcionario
  useEffect(() => {

    const id = (idSaved);

    //URL da API
    fetch(`http://10.5.81.153:8080/funcionarios/${id.myId}`, {

    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenSaved.myToken,
    } 

  })
    .then((response) => response.json())
    .then((json) => {
        setDadosAPI(json)
        })
        
        .catch((error) => {
            //console.error('Erro ao buscar dados da API:', error);
          })
          if (dadosAPI.urlImagem) {
            setProfileImage({ uri: dadosAPI.urlImagem });
          }
  }, [idSaved, tokenSaved.myToken]);

  // Dados da rede SSID
  useEffect(() => {

    NetInfo.fetch().then(state => {
      setConnState(state);
      console.log("Tipo de conexão", state.type);
      console.log("Está conectado?", state.isConnected);
      console.log("Detalhes da conexão", state.details);
      console.log("Detalhes da conexão", state.details.ssid);

    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setConnState(state);
      console.log("Tipo de conexão", state.type);
      console.log("Está conectado?", state.isConnected);
      console.log("Detalhes da conexão", state.details);
      console.log("Detalhes da conexão", state.details.ssid);

    });

  });
    

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
    Alert.alert("Testes")
    
  }

 // Envia os dados p/ a API
 const enviarDados = () => {

  fetch('http://10.5.81.153:8080/registro-ponto', {
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
      ssidAtual: "Kimnet1",
      idFuncionario: id.myId,

    }),

  })
  .then(response => {
    console.log("cliques: " + contadorCliques)
    console.log('Response status:', response.status);
    console.log(`registro de ponto: 
    horarioEntrada: ${horariosCapturados[0]},
    horarioIntervaloEntrada: ${horariosCapturados[1]},
    horarioIntervaloSaida: ${horariosCapturados[2]},
    horarioSaida: ${horariosCapturados[3]},
    ssidAtual: "Kimnet1",
    idFuncionario: ${id.myId}`)

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
    //Alert.alert("Registro de Ponto", "\nHorários registrado com sucesso!!!");
    console.error('Erro ao enviar dados para a API:', error.message);
  });

}
 
  
 
 



 
  //Navigate
  const RelatorioADM = () => {
    navigation.navigate('RelatorioADM');
  };
  const Config = () => {
    navigation.navigate('config');
  };

  const TelaADM = () => {
    navigation.navigate('TelaADM');
  };

  const Home = () => {
    navigation.navigate('Home');
  };

   

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>

        <Image
           //source={{ uri: dadosAPI.profileImage }}
          source={require('../assets/leticia.jpeg')}
          style={styles.profileImage}
      />
      </View>

      <Text style={styles.title}>{dadosAPI.nomeCompleto}</Text>

      
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

     
        <TouchableOpacity style={styles.bottomButton} onPress={RelatorioADM}>
          <Ionicons name="document-text-outline" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Home}>
          <Ionicons name="home" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Config}>
          <Ionicons name="person-circle-outline" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

      </View>

     
      <View style={styles.container}>
          <Text style={styles.boldText}>Estado da Rede</Text>
          <Text style={styles.text}>Tipo de conexão: {connState.type}</Text>
          <Text style={styles.text}>
            Está conectado? {connState.isConnected ? "Sim" : "Não"}
          </Text>
          {connState.details && (
            <Text style={styles.text}>Nome da Rede: {connState.details.ssid}</Text>
          )}
      </View>
  );

      <Text style={styles.version}>Vs 0.0.3</Text>
    </View>
    
  );
};