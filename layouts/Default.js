import {View} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../context/Auth';
import Splash from "../components/Splash";
import StackRouter from '../router/index';
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function DefaultLayout() {
  const insets = useSafeAreaInsets();
  const { isCheck } = useContext(AuthContext);

  if(isCheck) {
    return (
      <Splash/>
    )
  }

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1
      }}
    >
      <StackRouter/>
    </View>
  );
}