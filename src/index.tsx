import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Home from 'screens/Home';
import styles from 'styles/global';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}
