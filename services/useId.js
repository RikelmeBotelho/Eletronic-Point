import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useId = () => {
    const [id, setId] = useState('');
    useEffect(() => {
        const getMyId = async () => {
        try {
            const jsonId = await AsyncStorage.getItem('myId');
            const i = jsonId != null ? JSON.parse(jsonId) : null;
            setId(i);
            //console.log(i)
        } catch (e) {
            console.log('error: ' + e.message);
        }
        };
        getMyId();
    }, []);
    return id;
    };
    
export default useId;
  