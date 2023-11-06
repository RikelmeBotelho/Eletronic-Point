import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/configuraçao';
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';
import useToken from './../services/useToken';
import useId from './../services/useId';

export default function Config() {

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
    senha: '',
    cargo: '',
  });

  const [email, setEmail] = useState(dadosAPI.email);
  const [apelido, setApelido] = useState(dadosAPI.apelido);
  const [telefone, setTelefone] = useState(dadosAPI.telefone);

  useEffect(() => {
    setEmail(dadosAPI.email);
    setApelido(dadosAPI.apelido);
    setTelefone(dadosAPI.telefone);
  }, [dadosAPI.email, dadosAPI.apelido, dadosAPI.telefone]);

  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isApelidoEditing, setIsApelidoEditing] = useState(false);
  const [isTelefoneEditing, setIsTelefoneEditing] = useState(false);


  useEffect(() => {

    const id = (idSaved);

    //URL da API
    fetch(`http://192.168.1.5:8080/funcionarios/${id.myId}`, {

    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
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

  const salvarAlteracoes = () => {
    
    const id = (idSaved);
  
    const newData = {
      ...dadosAPI,
      email,
      apelido,
      telefone,
    };

    fetch(`http://192.168.1.5:8080/funcionarios/profile/basic-data/${id.myId}`, {
      
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenSaved.myToken,
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((json) => {

        setIsEmailEditing(false);
        setIsApelidoEditing(false);
        setIsTelefoneEditing(false);

        console.log(json); // Verifique a resposta da API
        
      })
      .catch((error) => {
        // Lidar com erros de requisição
        console.error('Erro ao salvar alterações:', error);
      });
      [idSaved, tokenSaved.myToken]
  };

    const handleEmailChange = (text) => {
        setEmail(text);
    };
    
    const handleApelidoChange = (text) => {
        setApelido(text);
    };
    
    const handleTelefoneChange = (text) => {
        setTelefone(text);
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

            <View style={styles.profileImageContainer}>

                <Image
                    source={require('../assets/bolsonaro.jpeg')}
                    style={styles.profileImage}
                />

            </View>


            <Text style={styles.label}><Text style={{...styles.boldText, textAlign: 'center'}}>Dados Pessoais</Text></Text>
            <TextInput
                style={styles.edit}
                value={dadosAPI.nomeCompleto}
                placeholder="Nome"
                editable={false}
            />

            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    value={dadosAPI.cpf}
                    placeholder="XXX.XXX.XXX-XX"
                    editable={false}
                />

                <TextInput
                    style={styles.fixed}
                    value={dadosAPI.dataNascimento}
                    placeholder="XX/XX/XXXX"
                    editable={false}
                />

            </View>

            <TextInput
                style={styles.edit}
                value={isEmailEditing ? email : dadosAPI.email}
                placeholder="Nome@gmail.com"
                editable={true}
                onFocus={() => setIsEmailEditing(true)}
                onChangeText={handleEmailChange}
            />

            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    value={isTelefoneEditing ? telefone : dadosAPI.telefone}
                    placeholder="(00) 00000-0000"
                    editable={true}
                    onFocus={() => setIsTelefoneEditing(true)}
                    onChangeText={handleTelefoneChange}
                />

                <TextInput
                    style={styles.fixed}
                    value={isApelidoEditing ? apelido : dadosAPI.apelido}
                    placeholder="Apelido"
                    editable={true}
                    onFocus={() => setIsApelidoEditing(true)}
                    onChangeText={handleApelidoChange}
                />
            </View>
            <Text style={styles.label}>
            
              <Text style={styles.boldText}>     Empresa</Text>
            
            </Text>
            <TextInput
                style={{...styles.edit, fontWeight: 'bold', textTransform: 'uppercase'}}
                value={dadosAPI.empresa.nome}
                textAlign='center'
                placeholder="Empresa"
                editable={false}
            />

            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    value={dadosAPI.cargo.area}
                    placeholder="Cargo"
                    editable={false} 
                />

                <TextInput
                    secureTextEntry={true}
                    style={styles.fixed}
                    value={dadosAPI.senha}
                    placeholder="Carga Horaria Mensal"
                    editable={false}
                />

            </View>

            {isEmailEditing || isApelidoEditing || isTelefoneEditing ? (
            <TouchableOpacity style={styles.bottomButton} onPress={salvarAlteracoes}>
                 <Text style={styles.bottomButtonSalvar}>Salvar</Text>
            </TouchableOpacity>
        ) : null}

            <View style={styles.bottomButtonsContainer}>

                <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
                <Ionicons name="document-text-outline" size={45} color="orange" style={styles.bottomButtonText}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomButton} onPress={Home}>
                <Ionicons name="home" size={45} color="orange" style={styles.bottomButtonText}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomButton} onPress={Config}>
                <Ionicons name="person-circle-outline" size={45} color="orange" style={styles.bottomButtonText}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomButton} onPress={Cadastro}>
                  <Ionicons name="add-circle-sharp" size={45} color="orange" style={styles.bottomButtonText}/>
                </TouchableOpacity>
            
                </View>

        </View>

    );

};