import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useToken = () => {

  const [token, setToken] = useState('');

  useEffect(() => {
    const getMyToken = async () => {
      try {
        const jsonToken = await AsyncStorage.getItem('myToken');
        const t = jsonToken != null ? JSON.parse(jsonToken) : null;
        setToken(t);
      } catch (e) {
        console.log('error: ' + e.message);
      }
    };

    getMyToken();
  }, []);  

  return token;
  
};

export default useToken;
