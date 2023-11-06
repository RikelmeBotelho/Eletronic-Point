import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/Cadastro';

const Cadastro = () => {

  const [dadosFuncionario, setDadosFuncionario] = useState({
    nome: '',
    email: '',
    cpf: '',
    apelido: '',
    telefone: '',
    dataNascimento: '',
    login: '',
    senha: '',
    empresa: '',
    cargo: '',
    chm: ''
  })

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
      
    const TelaADM = () => {
      navigation.navigate('TelaADM');
    };

    const handleCadastrar = () => {
      fetch('http://192.168.1.10/funcionarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFuncionario)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Funcionário cadastrado com sucesso:', data);
        resetForm()
      })
      .catch(error => {
        console.error('Erro ao cadastrar funcionário:', error);
      });
    };

    const resetForm = () => {
      // Resetar todos os campos para valores vazios
      setDadosFuncionario({
        nome: '',
        email: '',
        cpf: '',
        apelido: '',
        telefone: '',
        dataNascimento: '',
        login: '',
        senha: '',
        empresa: '',
        cargo: '',
        chm: ''
      });
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
        value={dadosFuncionario.nome}
        onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, nome: text })}
        style={styles.input}
      />

    </View>

    <View style={styles.textBoard}>

      <TextInput
        placeholder="   nome@email.com"
        value={dadosFuncionario.email}        
        onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, email: text })}
        style={styles.input}
      />

    </View>

    <View style={styles.row}>

      
    <View style={[styles.textBoard, styles.flex1]}>

      <TextInput
         placeholder="   CPF"
         keyboardType='numeric'
         value={dadosFuncionario.cpf}
         onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, cpf: text })}
         style={styles.input}
      />

      </View>

      <View style={[styles.textBoard, styles.flex1]}>

        <TextInput
          placeholder="Apelido"
          value={dadosFuncionario.apelido}
          onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, apelido: text })}
          style={styles.input}
        />

      </View>

    </View>

    <View style={styles.row}>
      
    <View style={[styles.textBoard, styles.flex1]}>

      <TextInput
        placeholder="   (00) 00000-0000"
        //keyboardType='numeric'
        value={dadosFuncionario.telefone}
        onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, telefone: text })}
        style={styles.input}
      />

      </View>

      <View style={[styles.textBoard, styles.flex1]}>

        <TextInput
          placeholder="   DD/MM/AAAA"
          keyboardType='numeric'
          value={dadosFuncionario.dataNascimento}
          onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, dataNascimento: text })}
          style={styles.input}
        />

      </View>

    </View>

    <View style={styles.textBoard}>

      <TextInput
        placeholder="   Login"
        value={dadosFuncionario.login}
        onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, login: text })}
        style={styles.input}
      />

    </View>

    <View style={styles.textBoard}>

      <TextInput
        secureTextEntry={true}
        placeholder="   ********"
        value={dadosFuncionario.senha}
        onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, senha: text })}
        style={styles.input}
      />

    </View>

    <View style={styles.textBoard}>

      <Text style={{...styles.label, textAlign: 'center'}}>
        
      <Text style={styles.boldText}>Empresa</Text>
      
      </Text>

      <TextInput
        placeholder="   Empresa"
        value={dadosFuncionario.empresa.nome}
        onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, empresa: text })}
        style={{...styles.input, textAlign: 'center', textTransform: 'uppercase'}}
      />

    </View>

      <View style={styles.row}>

      <View style={[styles.textBoard, styles.flex1]}>

        <TextInput
          placeholder="   Cargo"
          value={dadosFuncionario.cargo.area}
          onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, cargo: text })}
          style={{...styles.input, textTransform: 'uppercase'}}
        />

      </View>

      <View style={[styles.textBoard, styles.flex1]}>

        <TextInput
          placeholder="CH/M"
          keyboardType='numeric'
          onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, chm: text })}
          style={styles.input}
        />

      </View>

    </View>

    <View style={styles.buttonContainer}>

    <TouchableOpacity onPress={handleCadastrar} style={styles.button}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>

    </View>

  </ScrollView>

  <Text>
    {'\n'}
  </Text>

    <View style={styles.bottomButtonsContainer}>
  
      <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
        <Ionicons name="document-text-outline" size={45} color="orange" style={styles.bottomButtonText}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomButton} onPress={Home}>
        <Ionicons name="home" size={45} color="orange" style={styles.bottomButtonText}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomButton} onPress={TelaADM}>
        <Icon name="users" size={40} color="orange" style={styles.bottomButtonText}></Icon>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
        <Ionicons name="people-outline" size={45} color="orange" style={styles.bottomButtonText}/>
      </TouchableOpacity>

    </View>

    </View>

  );

};
    
export default Cadastro;
