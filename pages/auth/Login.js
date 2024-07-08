import {View, Text} from 'react-native'
import {useState, useContext} from 'react';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import AuthLayout from "../../layouts/Auth";
import { Link } from '@react-navigation/native';
import {AuthContext} from "../../context/Auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [loading, setLoading] = useState(false);
  const [seePass, setSeePass] = useState(true);
  const [snack, setSnack] = useState(false);
  const [message, setMessage] = useState('');
  const {setIsAuth, setMe} = useContext(AuthContext);

  const tryLogin = async() => {
    setLoading(true);
    try {
      const req = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      });

      const res = await req.json();
      console.log(res.id);
      if(!res.id) {
        setSnack(true);
        setMessage(res.message);
      } else {
        await AsyncStorage.setItem('token', res.token);
        setMe(res);
        setIsAuth(true);
      }
    } catch (err) {
      setSnack(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSnack(false);
      }, 3000);
    }
  }

  return (
    <AuthLayout navigation={navigation} title={'Login Account'}>
      <View
        style={{ width: "90%" }}>
        <TextInput
          style={{ height: 40, paddingHorizontal: 0, marginBottom: 5}}
          label="Username"
          mode="outlined"
          size="small"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={{ height: 40, paddingHorizontal: 0}}
          label="Password"
          secureTextEntry={seePass}
          mode="outlined"
          value={password}
          onChangeText={text => setPassword(text)}
          right={<TextInput.Icon onPress={() => setSeePass(!seePass)} size={20} style={{ marginTop: 15 }} icon="eye" />}
        />
        <Button mode="contained" disabled={loading} loading={loading} style={{ marginTop: 10 }}  onPress={tryLogin}>
          Login
        </Button>
        <View style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'center' }}>
            No have account?
            &nbsp;
            <Link style={{ color: 'blue' }} to={{ screen: 'Register' }}>
              Register
            </Link>
          </Text>
         </View>
      </View>
      <Snackbar
        visible={snack}
      >
        {message}
      </Snackbar>
    </AuthLayout>
  )
}