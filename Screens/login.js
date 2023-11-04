import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/mainstyle';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleEsqueciSenha = () => {
    Alert.alert('Esqueci a senha', 'Um e-mail de redefinição de senha será enviado para o seu email.');
  };

  const Entrar = () => {
    if (nome === 'usuario' && senha === 'senha') {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    } else {
      navigation.navigate('Principal');
    }
  
  };

  const ADM = () => {
    navigation.navigate('RecenteADM');
  };
  const Funcionario = () => {
    navigation.navigate('Principal');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require('../assets/icon.png')} />

      <TextInput
        style={styles.TextEmail}
        placeholder="Nome@empresa"
        value={nome}
        onChangeText={text => setNome(text)}
      />

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
      <TouchableOpacity style={styles.btnADM} onPress={ADM}>
        <Text style={{ color: 'white', textAlign: 'center' }}>ADM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnFunc} onPress={Funcionario}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Funcionário</Text>
      </TouchableOpacity>

      <View style={styles.orangeBall} />
      <View style={styles.secondBall} />

      <Text style={styles.version}>Vs 0.0.1</Text>
      
    </View>
  );
}

