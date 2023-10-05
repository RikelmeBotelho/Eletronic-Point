import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const Relatorio = () => {
        navigation.navigate('RelatorioADM');
    };
    const Config = () => {
        navigation.navigate('config');
    };
    const funcion = () => {
        navigation.navigate('funcion');
    };
    const Home = () => {
        navigation.navigate('Principal');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((employeeNumber) => (
                    <View key={employeeNumber} style={[styles.textContainer, styles.whiteBackground]}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
                                }}
                                style={styles.profileImage}
                            />
                            <Text style={styles.employeeName}>Funcionário {employeeNumber}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Text>{'\n'}</Text>

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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    textContainer: {
        backgroundColor: 'orange',
        paddingBottom: 5,
        marginBottom: 20,
    },
    employeeName: {
        fontSize: 18,
        marginLeft: 7, 
    },
    profileImageContainer: {
        backgroundColor: 'orange',
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        aspectRatio: 5,
        borderRadius: 10,
    },
    profileImage: {
        width: '19%',
        height: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        paddingBottom: 5,
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
        padding: 10,
        backgroundColor: 'orange',
    },
    bottomButton: {
        backgroundColor: 'orange', 
        padding: 10,
        borderRadius: 5,
    },
    bottomButtonText: {
        fontSize: 16,
        color: 'black',
    },
});

export default HomeScreen;

