import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Cabecalho from './src/componentes/cabecalho/index';
import Pesquisa from './src/componentes/pesquisa/index';

export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>

      <Cabecalho />

      <Pesquisa />

      <Text style = {styles.textBanner}> Em Cartaz </Text>

      <Image style = {styles.imageBanner} source = {require(`./images.png`)}></Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center'
  },
  imageBanner:{
    width: '80%',
    height: 200,
    marginTop: 15,
    borderRadius: 10
  },
  textBanner:{
    fontSize: 20,
    color: 'white',
    marginTop: 15,
    TextAlign: 'center',
    fontWeight: 'Bold'
  }
});
