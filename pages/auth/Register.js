import {View, Text} from 'react-native'
import {useState} from 'react';
import { TextInput, Button } from 'react-native-paper';
import AuthLayout from "../../layouts/Auth";
import { Link } from '@react-navigation/native';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [seePass, setSeePass] = useState(true);

  return (
    <AuthLayout navigation={navigation} title={'Register Account'}>
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
          style={{ height: 40, paddingHorizontal: 0, marginBottom: 5}}
          label="Email"
          mode="outlined"
          size="small"
          value={email}
          onChangeText={text => setEmail(text)}
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
        <Button mode="contained" style={{ marginTop: 10 }} onPress={() => console.log('Pressed')}>
          Register
        </Button>
        <View style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'center' }}>
            Already have account?
            &nbsp;
            <Link style={{ color: 'blue' }} to={{ screen: 'Login' }}>
              Login
            </Link>
          </Text>
         </View>
      </View>
    </AuthLayout>
  )
}