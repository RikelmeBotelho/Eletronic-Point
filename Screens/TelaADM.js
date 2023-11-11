import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
    const navigation = useNavigation();

   
  const HomeADM = () => {
    navigation.navigate('HomeADM');
  };
  const Cadastro = () => {
    navigation.navigate('Cadastro');
  };
  const TelaADM = () => {
    navigation.navigate('TelaADM');
  };
    return (
        <View style={styles.container}>
            <ScrollView>
                {[1, 2, 3, 4, 5, 6 ].map((employeeNumber) => (
                    <View key={employeeNumber} style={[styles.textContainer, styles.whiteBackground]}>
                        <View style={styles.profileImageContainer}>
                        <Image 
                            source={require('../assets/leticia.jpeg')}
                            style={styles.profileImage}
                        />
                            <Text style={styles.employeeName}>Funcionário {employeeNumber}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <Text>{'\n'}</Text>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    textContainer: {
        paddingBottom: 5,
        marginBottom: 30,
    },
    employeeName: {
        fontSize: 18,
        padding: 15,
        color: 'white'
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
        backgroundColor: 'orange'
    },
    profileImage: {
        width: '17%',
        height: '105%',
        borderRadius: 100,
        justifyContent: 'center',
        paddingBottom: 5,
        borderWidth: 2, 
        borderColor: 'white'
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
   
});

export default HomeScreen;

