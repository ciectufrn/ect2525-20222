import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.texto}>Hello World</Text>
      <Text style={styles.texto}>ECT2525</Text>
      <Image style={styles.imagem} source={require('./assets/imagens/pernalonga.jpg')}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 70,
  },
  imagem: {
    width: 200,
    height: 200,
  }
});
