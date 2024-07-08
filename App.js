import { NavigationContainer } from '@react-navigation/native';
import DefaultLayout from './layouts/Default';
import Auth from './context/Auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Auth>
          <DefaultLayout/>
        </Auth>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}