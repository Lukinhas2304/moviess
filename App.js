import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {Feather} from '@expo/vector-icons';
export default function App() {
const imagem = Math.floor(Math.random() * 4 +1);

  return (
    <View style={styles.container}>
      <View style = {styles.viewHeader}>

        <TouchableOpacity>
          <Feather style = {{marginLeft:-70}} name = 'menu' size = {36} color = "#FFF" />
        </TouchableOpacity>  

        <Text style = {styles.textHeader}> TELA MÁGICA </Text>
      </View>

      <View style = {styles.containerSearch}>

        <TextInput style = {styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>

      </View>

      <Text style = {styles.textBanner}> Em Cartaz </Text>

      <Image style = {styles.imageBanner} source = {require(`./assets/${imagem}.png`)}></Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#141a29',
    alignItems: 'center'
  },
  viewHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 10
  },
  textHeader:{
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    marginRight: 75
  },
  containerSearch:{
    flexDirection: 'row',
    width: '90%',
    backgroundColor: "white",
    marginTop: 30,
    alignItems: "center",
    borderRadius: 13
  },
  inputSearch:{
    height: 35,
    width: '100%',
    marginLeft: 5
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
