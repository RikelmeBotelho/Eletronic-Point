import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../style/configuraçao';

export default function Config() {
    const navigation = useNavigation();
    const [texto, setTexto] = useState('');

    const handleSalvar = () => {
        // Enviar para um servidor ou armazenar localmente.
        console.log('Texto inserido:', texto);
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
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
                    }}
                    style={styles.profileImage}
                />
            </View>

            <TextInput
                style={styles.edit}
                onChangeText={setTexto}
                value={texto}
                placeholder="Nome Sobrenome"
            />
            <View style={styles.fixed1}>
                <Text
                    style={styles.fixed}
                    onChangeText={setTexto}
                    value={texto}
                    placeholder="Campo 1"
                />
                <Text
                    style={styles.fixed}
                    onChangeText={setTexto}
                    value={texto}
                    placeholder="Campo 2"
                />
            </View>
            <TextInput
                style={styles.edit}
                onChangeText={setTexto}
                value={texto}
                placeholder="Nome@gmail.com"
            />
            <View style={styles.fixed1}>
                <TextInput
                    style={styles.fixed}
                    onChangeText={setTexto}
                    value={texto}
                    placeholder="(00) 00000-0000"
                />
                <Text
                    style={styles.fixed}
                    onChangeText={setTexto}
                    value={texto}
                    placeholder="Campo 2"
                />
            </View>
            <Text
                style={styles.edit}
                onChangeText={setTexto}
                value={texto}
            />
            <View style={styles.fixed1}>
                <Text
                    style={styles.fixed}
                    onChangeText={setTexto}
                    value={texto}
                    placeholder="Campo 1"
                />
                <Text
                    style={styles.fixed}
                    onChangeText={setTexto}
                    value={texto}
                    placeholder="Campo 2"
                />
            </View>

            <TouchableOpacity onPress={handleSalvar} style={styles.botao}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>


            <View style={styles.bottomButtonsContainer}>
                <TouchableOpacity style={styles.bottomButton} onPress={Relatorio}>
                    <Text style={styles.bottomButtonText}>Relatório</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={Home}>
                    <Text style={styles.bottomButtonText}>Home</Text>
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
