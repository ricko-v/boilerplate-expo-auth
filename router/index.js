import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from "../context/Auth";
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const Stack = createStackNavigator();

export default function StackRouter() {
  const { isAuth } = useContext(AuthContext);

  if(isAuth) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
  }
}