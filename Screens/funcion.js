import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useToken from './../services/useToken';
import useId from './../services/useId';
import styles from '../style/FuncionariosADM';

const FuncionScreen = () => {

  const navigation = useNavigation();

  const tokenSaved = useToken();

  const idSaved = useId();

  const [dadosAPI, setDadosAPI] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    apelido: '',
    empresa: '',
    cargo: '',
    cargaHorariaMensal: null,
    login: '',
    senha: '',
  });
  
  const [editedData, setEditedData] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    apelido: '',
    empresa: '',
    cargo: '',
    cargaHorariaMensal: null,
    login: '',
    senha: '',
  });

  const [isEditMode, setIsEditMode] = useState();

    useEffect(() => {

      const id = (idSaved);

    //URL da API
    fetch(`http://192.168.0.109:8080/funcionarios/${id.myId}`, {

      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + tokenSaved.myToken,
      } 

    })
      .then((response) => response.json())
      .then((json) => {
          setDadosAPI(json)
          const dataNascimentoFormatada = moment(json.dataNascimento).format("DD/MM/YYYY");
          // Atualize o estado usando a versão assíncrona da função de atualização
          setDadosAPI(prevState => ({
            ...prevState,
            dataNascimento: dataNascimentoFormatada
          }));
        })
        .catch((error) => {
          //console.error('Erro ao buscar dados da API:', error);
        });
    }, [idSaved, tokenSaved.myToken]);

   
    const handleSave = async () => {
      try {
        const id = (idSaved);

        const response = await fetch(`http://192.168.0.109:8080/funcionarios/profile/basic-data/${id.myId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenSaved.myToken,          
          },
          body: JSON.stringify(editedData),
        });
    
        if (response.ok) {

          const updatedData = await response.json();

          setDadosAPI(updatedData);
          setIsEditMode(false); 
          
          Alert.alert('Sucesso', 'Os dados foram atualizados com sucesso!');
        } 
      } catch (error) {

        alert('Ocorreu um erro ao salvar os dados do funcionário.');

      }
    };
    

  const handleEdit = () => {
    // Lógica para habilitar a edição dos campos
    
    setEditedData({ ...dadosAPI });

    setIsEditMode(true);
  };

  const handleToggleActivation = () => {
      
    const newStatus = !dadosAPI.ativo; 

    const endpoint = newStatus ? 'ativar' : 'desativar';

    const method = newStatus ? 'PUT' : 'DELETE';
   
    const id = (idSaved);
  const Cadastro = () => {
    navigation.navigate('Cadastro');
  };
    fetch(`http://192.168.0.109:8080/funcionarios/${endpoint}/${id.myId}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenSaved.myToken,
        },
        body: JSON.stringify({ ativo: newStatus }),
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(`Funcionário ${newStatus ? 'ativado' : 'inativado'} com sucesso:`, json);
        setDadosAPI({ ...dadosAPI, ativo: newStatus }); 
    })
    .catch((error) => {
        console.error(`Erro ao ${newStatus ? 'ativar' : 'inativar'} funcionário:`, error);
    });
};
    
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

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.profileImageContainer}>

          <Image 
            source={require('../assets/leticia.jpeg')}
            style={styles.profileImage}
          />

        </View>

        <View style={styles.textBoard}>

          <Text style={{...styles.label, textAlign: 'center'}}>
            <Text style={{...styles.boldText, textAlign: 'center'}}>Dados Pessoais</Text>
          </Text>

          <TextInput
            placeholder="   Nome"
            value={isEditMode ? editedData.nomeCompleto : dadosAPI.nomeCompleto}
            onChangeText={(text) => setEditedData({ ...editedData, nomeCompleto: text })}
            editable={isEditMode}
            style={styles.input}
          />

        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="   nome@email.com"
            value={isEditMode ? editedData.email : dadosAPI.email}
            onChangeText={(text) => setEditedData({ ...editedData, email: text })}
            editable={isEditMode}
            style={styles.input}
          />

        </View>

        <View style={styles.row}>

          
        <View style={[styles.textBoard, styles.flex1]}>

          <TextInput
             placeholder="   CPF"
             keyboardType='numeric'
             value={isEditMode ? editedData.cpf : dadosAPI.cpf}
            onChangeText={(text) => setEditedData({ ...editedData, cpf: text })}
            editable={isEditMode}
             style={styles.input}
          />

          </View>

          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="Apelido"
              value={isEditMode ? editedData.apelido : dadosAPI.apelido}
            onChangeText={(text) => setEditedData({ ...editedData, apelido: text })}
            editable={isEditMode}
              style={styles.input}
            />

          </View>

        </View>

        <View style={styles.row}>
          
        <View style={[styles.textBoard, styles.flex1]}>

          <TextInput
            placeholder="   (00) 00000-0000"
            //keyboardType='numeric'
            value={isEditMode ? editedData.telefone : dadosAPI.telefone}
            onChangeText={(text) => setEditedData({ ...editedData, telefone: text })}
            editable={isEditMode}
            style={styles.input}
          />

          </View>

          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   DD/MM/AAAA"
              keyboardType='numeric'
              value={isEditMode ? editedData.dataNascimento : dadosAPI.dataNascimento}
              onChangeText={(text) => setEditedData({ ...editedData, dataNascimento: text })}
              editable={isEditMode}
              style={styles.input}
            />

          </View>

        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="   Login"
            value={isEditMode ? editedData.login : dadosAPI.login}
            onChangeText={(text) => setEditedData({ ...editedData, login: text })}
            editable={isEditMode}
            style={styles.input}
          />

        </View>

        <View style={styles.textBoard}>

          <TextInput
            secureTextEntry={true}
            placeholder="   ********"
            value={isEditMode ? editedData.senha : dadosAPI.senha}
            onChangeText={(text) => setEditedData({ ...editedData, senha: text })}
            editable={isEditMode}
            style={styles.input}
          />

        </View>

        <View style={styles.textBoard}>

          <Text style={{...styles.label, textAlign: 'center'}}>
            
          <Text style={styles.boldText}>Empresa</Text>
          
          </Text>

          <TextInput
            placeholder="   Empresa"
            value={dadosAPI.empresa.nome}
            onChangeText={(text) => setDadosAPI({ ...dadosAPI, empresa: text })}
            editable={false}
            style={{...styles.input, textAlign: 'center', textTransform: 'uppercase'}}
          />

        </View>

          <View style={styles.row}>

          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   Cargo"
              value={dadosAPI.cargo.area}
              onChangeText={(text) => setDadosAPI({ ...dadosAPI, cargo: text })}
              editable={false}
              style={{...styles.input, textTransform: 'uppercase'}}
            />

          </View>

          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="CH/M"
              keyboardType='numeric'
              value={(dadosAPI.cargaHorariaMensal || '').toString()}
              onChangeText={(text) => setDadosAPI({ ...dadosAPI, cargaHorariaMensal: text })}
              editable={false}
              style={styles.input}
            />

          </View>
          </View>

        <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={handleToggleActivation} style={styles.button}>
          <Text style={styles.buttonText}>{dadosAPI.ativo ? 'Inativar' : 'Ativar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEdit} style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        </View>

      </ScrollView>

      <Text>
        {'\n'}
      </Text>

      <View style={styles.bottomButtonsContainer}>
      <TouchableOpacity style={styles.bottomButton} onPress={Cadastro}>
       <Ionicons name="add-circle-sharp" size={45} color="orange" style={styles.bottomButtonText}/>
     </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
          <Ionicons name="document-text-outline" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Home}>
          <Ionicons name="home" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Config}>
          <Ionicons name="person-circle-outline" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
          <Ionicons name="people-outline" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>

      </View>

    </View>

  );
};

export default FuncionScreen;
