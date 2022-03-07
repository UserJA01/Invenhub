import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>
      <Text>InvenHub</Text>
      <StatusBar style="auto" />
    </View><View style={styles.footer}>
      <Text>Prueba</Text>
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
