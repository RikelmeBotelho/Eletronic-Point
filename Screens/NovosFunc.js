
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const apiURL = "http://localhost:8080/funcionarios/2";

const FuncionScreen = () => {

  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [CHA, setCHA] = useState('');
  const [CHD, setCHD] = useState('');
  const [Tipo, setTipo] = useState('');
  const [Turno, setTurno] = useState('');
  const [Setor, setSetor] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Empresa, setEmpresa] = useState('');

  const navigation = useNavigation();

  const handleSave = () => {
    // Lógica para salvar os dados no backend
  };

  const handleEdit = () => {
    // Lógica para habilitar a edição dos campos
  };

  const handleInactivate = () => {
    // Lógica para inativar a conta
  };



  const Home = () => {
    navigation.navigate('RecenteADM');
  };
  const Relatorio = () => {
    navigation.navigate('TelaADM');
  };
  const Config = () => {
    navigation.navigate('config');
  };
  const funcion = () => {
    navigation.navigate('NovosFunc');
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.textBoard}>
          <Text style={styles.label}><Text style={styles.boldText}>                                   Dados Pessoais</Text></Text>
          <TextInput
            placeholder="   Nome"
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
            editable={false}
          />
        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="   nome@email.com"
            value={email}
            onChangeText={setEmail}
            editable={false}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="   CPF"
            keyboardType='numeric'
            value={cpf}
            onChangeText={setCpf}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   DD/MM/AAAA"
              keyboardType='numeric'
              value={dob}
              onChangeText={setDob}
              style={styles.input}
            />
          </View>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   (00) 00000-0000"
              keyboardType='numeric'
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.textBoard}>

          <TextInput
            placeholder="   Login"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>

          <TextInput
            secureTextEntry={true}
            placeholder="   ********"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>
          <Text style={styles.label}>
          <Text style={styles.boldText}>                                         Empresa</Text>
          </Text>
          <TextInput
            placeholder="   Empresa"
            value={Empresa}
            onChangeText={setEmpresa}
            style={styles.input}
          />
        </View>

        <View style={styles.textBoard}>
          <TextInput
            placeholder="   Cargo"
            value={Cargo}
            onChangeText={setCargo}
            style={styles.input}
          />
        </View>


        <View style={styles.textBoard}>
          <TextInput
            placeholder="   Setor"
            value={Setor}
            onChangeText={setSetor}
            style={styles.input}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   Tipo"
              value={Tipo}
              onChangeText={setTipo}
              style={styles.input}
            />
          </View>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   Turno"
              value={Turno}
              onChangeText={setTurno}
              style={styles.input}
            />
          </View>
        </View>


        <View style={styles.row}>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   CH/D"
              value={CHD}
              onChangeText={setCHD}
              style={styles.input}
            />
          </View>
          <View style={[styles.textBoard, styles.flex1]}>

            <TextInput
              placeholder="   CH/A"
              value={CHA}
              onChangeText={setCHA}
              style={styles.input}
            />
          </View>
        </View>




        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.buttonText}>Inativar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit} style={styles.button}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleInactivate} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text>
        {'\n'}
      </Text>

      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
          <Text style={styles.bottomButtonText}>Relatório</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={Home}>
          <Text style={styles.bottomButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={funcion}>
          <Text style={styles.bottomButtonText}>Funcionários</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    background: 'white',
    
  },
  profileImageContainer: {
    backgroundColor: 'orange',
    borderRadius: 300,
    padding: 10,
    position: 'fixed',
    marginBottom: -10,
    height: 220,
    width: 220,
    margin: 70,
    top: -50
  },
  profileImage: {
      height: 200,
      width: 200, 
      aspectRatio: 1, 
      borderRadius: 100,
  },
  textBoard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 3,
    marginBottom: 10,
  },
  label: {
    color: '#555',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 80,
    padding: 7,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  flex1: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 1,
    margin: 5
  },
  button: {
    flex: 1,
    backgroundColor: 'orange',
    borderRadius: 25,
    padding: 10,
    paddingLeft: 5,
    alignItems: 'center',
    paddingTop: 13,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    bottom: -12,
    padding: 10,
  
  },
});

export default FuncionScreen;
