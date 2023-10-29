import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


function RelatorioADM() {
  const navigation = useNavigation();
  const handleDownload = () => {
    // Lógica para baixar o relatório aqui
    // Por exemplo, você pode usar a biblioteca 'react-native-fetch-blob' para baixar um arquivo.
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity onPress={handleDownload} style={{ backgroundColor: 'orange', padding: 15, borderRadius: 5, width: 180, alignItems: 'center',}}>
        <Text style={{ color: 'white', fontSize: 20, }}>Baixar Relatório</Text>
      </TouchableOpacity>
      <View style={styles.orangeBall} />
      <View style={styles.secondBall} />

      <View style={styles.all}>
      <View style={styles.bottomButtonsContainer}>

        <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
            <Ionicons name="document-text-outline" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Home}>
             <Ionicons name="home" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Config}>
          <Ionicons name="person-circle-outline" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
          <Ionicons name="people-outline" size={45} color="white" style={styles.bottomButtonText}/>
        </TouchableOpacity>
        
      </View>
      
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
bottomButtonsContainer:{
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
  position: 'absolute',
  bottom: -315,
  padding: 10,
  position: 'center',
  alignItems: 'center',
},
orangeBall: {
  width: 500,
  height: 500,
  borderRadius: 500,
  backgroundColor: 'orange',
  left: '40%',
  top: '70%',
  zIndex: -1,
  position: 'absolute',
},
secondBall: {
  zIndex: 0,
  backgroundColor: "#ff8624",
  width: 500,
  height: 500,
  borderRadius: 500,
  right: '20%',
  top: '80%',
  position: 'absolute',

},
});


export default RelatorioADM;