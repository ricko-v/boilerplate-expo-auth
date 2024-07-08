import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext, useEffect} from 'react';
import { ActivityIndicator, View } from 'react-native'
import {AuthContext} from '../context/Auth';
import Logo from './Logo';

export default function Splash() {
  const {setIsCheck, setIsAuth, setMe} = useContext(AuthContext);

  const checkAuth = async() => {
    const req = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': await AsyncStorage.getItem('token') 
      }, 
    });
    const res = await req.json();
    
    if(req.status == 200) {
      setIsAuth(true);
      setMe(res);
    }

    setIsCheck(false);
  };

  useEffect(() => {
    checkAuth();
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffffff" }}>
      <View>
        <Logo width={70} height={70}/>
        <ActivityIndicator style={{  marginTop: 30}}/>
      </View>
    </View>
  )
}