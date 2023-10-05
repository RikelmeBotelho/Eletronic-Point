import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/princip';

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
  const [horasRegistradas, setHorasRegistradas] = useState([]);
  const [ setRegistrado] = useState(false);
  const [contadorPressaoBotao, setContadorPressaoBotao] = useState(0);

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

  const registrarHora = () => {
    if (contadorPressaoBotao < 4) {
      const dataAtual = new Date();
      const hora = dataAtual.getHours().toString().padStart(2, '0');
      const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
      const horaFormatada = `${hora}:${minutos}`;

      setHorasRegistradas([...horasRegistradas, horaFormatada]);
      setContadorPressaoBotao(contadorPressaoBotao + 1);
      setRegistrado(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
          }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.title}>Nome do Usuário</Text>
      <TouchableOpacity
        style={[
          styles.button,
          contadorPressaoBotao >= 4 && styles.disabledButton,
        ]}
        onPress={registrarHora}
        disabled={contadorPressaoBotao >= 4}
      >
        <Text style={styles.buttonText}>Registrar Hora</Text>
      </TouchableOpacity>

      <View style={[styles.textBoxRow, { flexDirection: 'row' }]}>
        {horasRegistradas.map((hora, index) => (
          <TextBox key={index} hora={hora} />
        ))}
      </View>

      <View style={styles.flexBoxContainer}>
        <View style={styles.flexBoxItem}></View>
      </View>

      
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
    </View>
  );
}
