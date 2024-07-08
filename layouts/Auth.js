import {View, Text} from 'react-native';
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Logo from "../components/Logo";

export default function AuthLayout({children, title }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        width: "100%",
        position: "relative",
        backgroundColor: "#ffffff",
        height: "100%",
        justifyContent: 'center',
        alignItems: "center"
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <Logo width={70} height={70} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 500, fontSize: 20 }}>{title}</Text>
      </View>
      {children}
      <View style={{ position: 'absolute', bottom: 10 }}>
        <Text style={{ fontWeight: 500 }}>Powered by Expo</Text>
      </View>
    </View>
  );
}