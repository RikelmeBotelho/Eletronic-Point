import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from '../style/Cadastro';
import useToken from './../services/useToken';
import useId from './../services/useId';

const Cadastro = () => {

  const [dadosFuncionario, setDadosFuncionario] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    apelido: '',
    telefone: '',
    dataNascimento: '',
    login: '',
    senha: '',
    idCargo: '',
    cargaHorariaMensal: 0,
    cargaHorariaDiaria: 0,
    horarioEntrada: '',
    horarioIntervaloEntrada: '',
    horarioIntervaloSaida: '',
    horarioFolgaEntrada: '',
    horarioFolgaSaida: '',
    diaFolga: '',
    horarioSaida: '',
  })
  const [profileImage, setProfileImage] = useState(null);


  const navigation = useNavigation();

  const tokenSaved = useToken();

  const idSaved = useId();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permitir acesso à Galeria de Fotos');
      }
    })();
  }, []);
  

  
  //console.log("imgSalva: " + profileImage);

    const HomeADM = () => {
      navigation.navigate('HomeADM');
    };

    const Cadastro = () => {
      navigation.navigate('Cadastro');
    };

      
    const TelaADM = () => {
      navigation.navigate('TelaADM');
    };

    function formatarData(dataString) {
      // Verifica se a string de data está no formato esperado
      if (/^\d{8}$/.test(dataString)) {
        // Extrai os componentes da data
        const dia = dataString.substring(0, 2);
        const mes = dataString.substring(2, 4);
        const ano = dataString.substring(4);
    
        // Formata a data com hifens
        const dataFormatada = `${ano}-${mes}-${dia}`;
    
        return dataFormatada;
      } else {
        console.error("Formato de data inválido. Use o formato 21062004.");
        return null;
      }
    }

    const handleCadastrar = () => {

      if (!profileImage) {
        console.error('Selecione uma imagem de perfil antes de cadastrar.');
        return;
      }

      const formData = new FormData();

      if (profileImage) {


      //console.log("URI da imagem: " + profileImage.assets[0].uri)//obj.assets[0].uri
      
      let imageName = profileImage.assets[0].uri.substring(profileImage.assets[0].uri.lastIndexOf('/') + 1, profileImage.assets[0].uri.length);
      let extension = imageName.split('.')[1];
      

        formData.append('foto', {
          uri: profileImage.assets[0].uri,
          type: 'image/' + extension,
          name: imageName,
        });
      }
  
      Object.keys(dadosFuncionario).forEach((key) => {
        formData.append(key, dadosFuncionario[key]);
      });

      const id = (idSaved);

      console.log("mytohen: " + tokenSaved.myToken)

        fetch('http://10.5.81.153:8080/funcionarios', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + tokenSaved.myToken,
          },
          body: formData,
        })
        .then((response) => {

          console.log("formData: " + JSON.stringify(formData));
          
          if (!response.ok) {
            // Se a resposta não estiver OK, lança um erro com a mensagem de resposta
            throw new Error(`Erro na requisição: ${response.statusText}`);
          }
          return response.json();
        })
          .then((data) => {
            console.log('Funcionário cadastrado com sucesso:', data);
            resetForm();
          })
          .catch((error) => {
            console.error('Erro ao cadastrar funcionário:', error.message);
          });
          setProfileImage(null);
          [idSaved, tokenSaved.myToken]};

      const handleImageSelection = async () => {
        
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
          base64: false
        });
    
        console.log('URI da imagem selecionada:', result.assets[0].uri);
        if (!result.canceled) {
          setProfileImage(result);
        }
      };
  
    const resetForm = () => {
      
      setDadosFuncionario({
        nomeCompleto: '',
        email: '',
        cpf: '',
        apelido: '',
        telefone: '',
        dataNascimento: '',
        login: '',
        senha: '',
        idCargo: '',
        cargaHorariaMensal: '',
        cargaHorariaDiaria: '',
        horarioEntrada: '',
        horarioIntervaloEntrada: '',
        horarioIntervaloSaida: '',
        horarioFolgaEntrada: '',
        horarioFolgaSaida: '',
        diaFolga: '',
        horarioSaida: '',
      });
    };
    

 return (

  <View style={styles.container}>

  <ScrollView>

  <View style={styles.profileImageContainer}>
          {profileImage && (
            <Image source={{ uri: profileImage.uri }} style={styles.profileImage} />
          )}
          <TouchableOpacity onPress={handleImageSelection}>
            <Text>Selecione a Foto</Text>
          </TouchableOpacity>
        </View>

    <View style={styles.textBoard}>

      <Text style={{...styles.label, textAlign: 'center'}}>
        <Text style={{...styles.boldText, textAlign: 'center'}}>Dados Pessoais</Text>
      </Text>

      <TextInput
            placeholder="Nome"
            value={dadosFuncionario.nomeCompleto}
            onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, nomeCompleto: text })}
            style={styles.input}
          />

    </View>

    <View style={styles.textBoard}>

      <TextInput
            placeholder="Email"
            value={dadosFuncionario.email}
            onChangeText={text => setDadosFuncionario({ ...dadosFuncionario, email: text })}
            style={styles.input}
          />

    </View> 
    <View style={styles.row}>

          
<View style={[styles.textBoard, styles.flex1]}>

  <TextInput
     placeholder="   CPF"
     //keyboardType='numeric'
     value={dadosFuncionario.cpf}
    onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, cpf: text })}
    //editable={isEditMode}
     style={styles.input}
  />

  </View>

  <View style={[styles.textBoard, styles.flex1]}>

    <TextInput
      placeholder="Apelido"
      value={dadosFuncionario.apelido}
    onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, apelido: text })}
    //editable={isEditMode}
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
              onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, telefone: text })}
              //editable={isEditMode}
              style={styles.input}
            />
  
            </View>
  
            <View style={[styles.textBoard, styles.flex1]}>
  
              <TextInput
                placeholder="   DD/MM/AAAA"
                keyboardType='numeric'
                value={dadosFuncionario.dataNascimento}
                onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, dataNascimento: formatarData(text) })}
                //editable={isEditMode}
                style={styles.input}
              />
  
            </View>
  
          </View>

           <View style={styles.textBoard}>

          <TextInput
            placeholder="   Login"
            value={dadosFuncionario.login}
            onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, login: text })}
            //editable={isEditMode}
            style={styles.input}
          />

        </View>

        <View style={styles.textBoard}>

          <TextInput
            secureTextEntry={true}
            placeholder="   ********"
            value={dadosFuncionario.senha}
            onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, senha: text })}
            //editable={isEditMode}
            style={styles.input}
          />

        </View>

         <View style={styles.textBoard}>

          <Text style={{...styles.label, textAlign: 'center'}}>
            
          <Text style={styles.boldText}>Dados Profissionais</Text>
          
          </Text>

        </View>

        <View style={styles.textBoard}>

      <TextInput
        placeholder="   Cargo"
        value={dadosFuncionario.idCargo}
        onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, idCargo: text })}
        //editable={isEditMode}
        style={styles.input}
      />
       <TextInput
        placeholder="   Cargo Horaria Mensal"
        value={dadosFuncionario.cargaHorariaMensal.toString()}
        onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, cargaHorariaMensal: text })}
        //editable={isEditMode}
        style={styles.input}
      />

      </View>
        
        <View style={styles.row}>
          
          <View style={[styles.textBoard, styles.flex1]}>
  
            <TextInput
              placeholder="   Carga Horaria Diaria"
              //keyboardType='numeric'
              value={dadosFuncionario.cargaHorariaDiaria.toString()}
              onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, cargaHorariaDiaria: text })}
              //editable={isEditMode}
              style={styles.input}
            />
  
            </View>
  
            <View style={[styles.textBoard, styles.flex1]}>
  
              <TextInput
                placeholder="   Horario Entrada"
                //keyboardType='numeric'
                value={dadosFuncionario.horarioEntrada}
                onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, horarioEntrada: text })}
                //editable={isEditMode}
                style={styles.input}
              />
  
            </View>
  
          </View>


  
          <View style={styles.row}>
          
          <View style={[styles.textBoard, styles.flex1]}>
  
            <TextInput
              placeholder="   Horario Intervalo Entrada"
              //keyboardType='numeric'
              value={dadosFuncionario.horarioIntervaloEntrada}
              onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, horarioIntervaloEntrada: text })}
              //editable={isEditMode}
              style={styles.input}
            />
  
            </View>
  
            <View style={[styles.textBoard, styles.flex1]}>
  
              <TextInput
                placeholder="   Horario Intervalo Saida"
                //keyboardType='numeric'
                value={dadosFuncionario.horarioIntervaloSaida}
                onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, horarioIntervaloSaida: text })}
                //editable={isEditMode}
                style={styles.input}
              />
  
            </View>
  
          </View>

          <View style={styles.row}>
          
          <View style={[styles.textBoard, styles.flex1]}>
  
            <TextInput
              placeholder="   Horario Folga Entrada"
              //keyboardType='numeric'
              value={dadosFuncionario.horarioFolgaEntrada}
              onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, horarioFolgaEntrada: text })}
              //editable={isEditMode}
              style={styles.input}
            />
  
            </View>
  
            <View style={[styles.textBoard, styles.flex1]}>
  
              <TextInput
                placeholder="   Horario Folga Saida"
                //keyboardType='numeric'
                value={dadosFuncionario.horarioFolgaSaida}
                onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, horarioFolgaSaida: text })}
                //editable={isEditMode}
                style={styles.input}
              />
  
            </View>
  
          </View>

          <View style={styles.row}>
          
          <View style={[styles.textBoard, styles.flex1]}>
  
            <TextInput
              placeholder="   Dia Folga"
              //keyboardType='numeric'
              value={dadosFuncionario.diaFolga}
              onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, diaFolga: text })}
              //editable={isEditMode}
              style={styles.input}
            />
  
            </View>
  
            <View style={[styles.textBoard, styles.flex1]}>
  
              <TextInput
                placeholder="   Horario Saida"
                //keyboardType='numeric'
                value={dadosFuncionario.horarioSaida}
                onChangeText={(text) => setDadosFuncionario({ ...dadosFuncionario, horarioSaida: text })}
                //editable={isEditMode}
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
  
    <TouchableOpacity style={styles.bottomButton} onPress={TelaADM}>
        <Ionicons name="people-outline" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={HomeADM}>
        <Ionicons name="home" size={45} color="orange" style={styles.bottomButtonText}/>
      </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={Cadastro}>
          <Ionicons name="add-circle-sharp" size={45} color="orange" style={styles.bottomButtonText}/>
        </TouchableOpacity>
    </View>

    </View>

  );
};
export default Cadastro;
