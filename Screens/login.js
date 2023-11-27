import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/mainstyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

  const navigation = useNavigation();

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleEsqueciSenha = () => {
    Alert.alert('Esqueci a senha', 'Um e-mail de redefinição de senha será enviado para o seu email.');
  };

  const Entrar = async () => {
    try {
      const response = await fetch(`http://10.5.81.153:8080/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          login,
          senha,
        }),
        
      });

      const data = await response.json();
      
      console.log("Teste", data.role)
      if (data.role === "FUNCIONARIO" && response.ok) {

        //Tela principal Funcionario
        navigation.navigate('Principal', { token: data.token });
        Alert.alert("Login", "\nLogin realizado com sucesso!!!");

      } else if(data.role === "ADMIN" && response.ok) {

        navigation.navigate('HomeADM', { token: data.token });
        Alert.alert("Login", "\nLogin realizado com sucesso!!!");

      } else {
        Alert.alert('Erro', data.message || 'Erro ao fazer login. Tente novamente mais tarde.');
      }
    
      
      const idResponse = data.id;
      const tokenResponse = data.token;

      let idU = idResponse;
      let tokenC = tokenResponse;

      const storeMyId= async (idU) => {

        try {

          const jsonId = JSON.stringify(idU);
          await AsyncStorage.setItem('myId', jsonId);

          console.log("salvou ID")

        } catch (e) {
          console.log("error: " + e.message)
        }
      };

      const storeMyToken = async (token) => {

        try {

          const jsonToken = JSON.stringify(token);
          await AsyncStorage.setItem('myToken', jsonToken);
          console.log("salvou Token")

        } catch (e) {

          console.log("error: " + e.message)

        }
      };
      
      storeMyId({myId: idU});
      storeMyToken({myToken: tokenC});
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao fazer login. Tente novamente mais tarde.');
    }
    
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    style={{ flex: 1 }} 
  >
    <View style={styles.container}>

      <Image style={styles.logoImage} source={require('../assets/icon.png')} />

      <TextInput
        style={styles.TextEmail}
        placeholder="Login@empresa"
        value={login}
        onChangeText={text => setLogin(text)}
      />

          <View style={styles.orangeBall} />
          <View style={styles.secondBall} />

      <TextInput
        style={styles.TextSenha}
        placeholder="********"
        secureTextEntry={true}
        value={senha}
        onChangeText={text => setSenha(text)}
      />

      <TouchableOpacity style={styles.esqueciSenha} onPress={handleEsqueciSenha}>
        <Text style={{ color: 'grey', textAlign: 'center' }}>Esqueci a senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={Entrar}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Entrar</Text>
      </TouchableOpacity>
      
          <View style={styles.orangeBall} />
          <View style={styles.secondBall} />

      <Text style={styles.version}>Vs 0.0.1</Text>
      
    </View>
    </KeyboardAvoidingView>
  );
};