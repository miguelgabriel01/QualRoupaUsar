import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from "react-native";
import myImageFlorest from '../assets/images/landscape-nature.png'; // Ajuste o caminho conforme necessário

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={myImageFlorest} style={styles.image} />
        <Text style={styles.title}>Qual roupa usar?</Text>
        <Text style={styles.subtitle}>Organize suas roupas facilmente! Classifique por tipo, cor e ocasião, e receba lembretes sobre o que usar a cada dia.</Text>
        <TouchableOpacity style={styles.buttonCreate}>
          <Text style={styles.buttonTextCreate}>Abrir Guarda-roupa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonTextLogin}>Criar um</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    textAlign:'center',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    width:'100%',
    height:'100%',
    alignContent: 'center',
    flexDirection: 'column',
    textAlign:'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#5C5C5C',  
    textAlign:'center',
                
  },
  subtitle: {
    fontSize: 20,
    color: "#777171",
    textAlign:'center',
    margin: 1,
    padding:10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Ajuste conforme necessário (contain, cover, stretch)
  },
  buttonCreate: {
    backgroundColor: '#059CAD', // Cor de fundo do botão 059CAD
    borderRadius: 50, // Bordas arredondadas
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Cor da sombra no iOS
    width:320,
    height:60,
    display:'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    padding:20,
  },
  buttonLogin: {
    backgroundColor: '#FFFFFF', // Cor de fundo do botão 059CAD
    borderRadius: 50, // Bordas arredondadas
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Cor da sombra no iOS
    width:320,
    height:60,
    display:'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin:20,
  },
  buttonTextCreate: {
    color: '#FFF', // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
  },  
  buttonTextLogin: {
    color: '#059CAD', // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
  },
});
