import {Text, View} from 'react-native';
import {useContext, useState} from 'react';
import {AuthContext} from '../context/Auth';
import {Button, Dialog} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, CommonActions  } from '@react-navigation/native';

export default function Home() {
  const {me, setMe, setIsAuth} = useContext(AuthContext);
  const [confLogout, setConfLogout] = useState(false);
  const navigation = useNavigation();

  const logout = async () => {
    await AsyncStorage.removeItem ('token');
    setIsAuth(false);
  }

  return (
    <View 
    style={{ backgroundColor: "#ffffff", height: "100%", flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Welcome {me.username}</Text>
      <Button mode="contained" onPress={() => setConfLogout(true)} style={{ marginTop: 20 }}>Logout</Button>

        <Dialog visible={confLogout} onDismiss={() => setConfLogout(false)}>
            <Dialog.Title>Logout Account</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">Are you sure to logout?</Text>
            </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setConfLogout(false)}>Cancel</Button>
            <Button onPress={() => logout()}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
    </View>
  )
}