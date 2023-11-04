import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/configuraçao';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Config() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [dtNasc, setDtNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [apelido, setApelido] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [setor, setSetor] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSalvar = () => {

        //Reseta o texto inserido depois que aperta o botão
        setNome("");
        setCpf("");
        setEmail("");
        setDtNasc("");
        setDtNasc("");
        setTelefone("");
        setApelido("");
        setEmpresa("");
        setSetor("");
        setTipo("");

        // Enviar para um servidor ou armazenar localmente.
        console.log('Nome:', nome);
        console.log('CPF:', cpf)
        console.log('Data de Nascimento: ', dtNasc);
        console.log('Email:', email);
        console.log('Telefone:', telefone);
        console.log('Apelido:', apelido);
        console.log('Empresa:', empresa);
        console.log('Setor: ', setor);
        console.log('Tipo', tipo);
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
        
        <View style={styles.container}>

            <View style={styles.profileImageContainer}>
                <Image
                    source={require('../assets/leticia.jpeg')}
                    style={styles.profileImage}
                />
            </View>

            <TextInput
                style={styles.edit}
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"
            />
            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    onChangeText={setCpf}
                    value={cpf}
                    placeholder="XXX.XXX.XXX-XX"
                    editable={false}
                />
                <TextInput
                    style={styles.fixed}
                    onChangeText={setDtNasc}
                    value={dtNasc}
                    placeholder="XX/XX/XXXX"
                    editable={false}
                />
            </View>
            <TextInput
                style={styles.edit}
                onChangeText={setEmail}
                value={email}
                placeholder="Nome@gmail.com"
            />
            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    onChangeText={setTelefone}
                    value={telefone}
                    placeholder="(00) 00000-0000"
                />
                <TextInput
                    style={styles.fixed}
                    onChangeText={setApelido}
                    value={apelido}
                    placeholder="Apelido"
                    editable={false}
                />
            </View>
            <TextInput
                style={styles.edit}
                onChangeText={setEmpresa}
                value={empresa}
                placeholder="Empresa"
                editable={false}
            />
            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    onChangeText={setSetor}
                    value={setor}
                    placeholder="Setor"
                    editable={false} 
                />
                <TextInput
                    style={styles.fixed}
                    onChangeText={setTipo}
                    value={tipo}
                    placeholder="Tipo"
                    editable={false}
                />
            </View>

            <TouchableOpacity onPress={handleSalvar} style={styles.botao}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>


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
            </View>

        </View>
    );
}
