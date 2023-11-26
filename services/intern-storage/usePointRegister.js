import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

  const usePointRegister = () => {

  const [pointRegister, setPointRegister] = useState({})

  useEffect(() => {

    const getPointRegister = async() =>{

      try {

        const pointRegisterJson = await AsyncStorage.getItem('myPointRegister');
        
        const pointRegisterObj = pointRegisterJson != null ? JSON.parse(pointRegisterJson) : null;

        setPointRegister(pointRegisterObj);

      } catch (e) {
        console.log('error usePointRegister: ' + e.message);
      }

    }

    getPointRegister();

  }, []);

  return pointRegister;
  
};

export default usePointRegister;
