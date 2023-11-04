import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const Relatorio = () => {
        navigation.navigate('TelaADM');
    };
    const Home = () => {
        navigation.navigate('RecenteADM');
    };
    const funcion = () => {
        navigation.navigate('NovosFunc');
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                {[1, 2, 3, 4, 5, 6].map((employeeNumber) => (
                    <TouchableOpacity
                        key={employeeNumber}
                        style={[styles.textContainer, styles.whiteBackground]}
                        onPress={() => {
                            
                            //Quando precionado fazer oq...     

                        }}
                    >
                        <View style={styles.profileImageContainer}>
                            <Image
                                source={require('../assets/leticia.jpeg')}
                                style={styles.profileImage}
                            />
                            <Text style={styles.employeeName}>Funcionário {employeeNumber}</Text>
                        </View>
                    </TouchableOpacity>
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
        padding: 20,
        backgroundColor: 'white',
    },
    textContainer: {
        paddingBottom: 5,
        marginBottom: 30,
    },
    employeeName: {
        fontSize: 18,
        padding: 15,
        color: 'white',
    },
    profileImageContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        aspectRatio: 4.5,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'orange',
        backgroundColor: 'orange',
    },
    profileImage: {
        width: '17%',
        height: '105%',
        borderRadius: 100,
        justifyContent: 'center',
        paddingBottom: 5,
        borderWidth: 2,
        borderColor: 'white',
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    bottomButton: {
        padding: 10,
        borderRadius: 5,
    },
    bottomButtonText: {
        fontSize: 16,
        color: 'black',
    },
});

export default HomeScreen;
