import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import myImageFlorest from '../assets/images/landscape-nature.png'; // Ajuste o caminho conforme necessário
import { useNavigation } from '@react-navigation/native';

const FormCreate = () => {
  const [nickName, setNickName] = useState(''); // Estado para o campo nickName
  const [password, setPassword] = useState(''); // Estado para o campo password
  const [message, setMessage] = useState(''); // Estado para a mensagem de erro ou sucesso
  const [messageColor, setMessageColor] = useState(''); // Estado para a cor da mensagem
  const navigation = useNavigation();

  // Função para lidar com o registro do usuário
  const handleRegister = async () => {
    if (!nickName || !password) {
      setMessage('Por favor, preencha todos os campos.');
      setMessageColor('red');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickName, password }), // Envia os dados do usuário
      });

      const data = await response.json(); // Converte a resposta em JSON

      if (response.ok) {
        setMessage('Usuário registrado com sucesso!');
        setMessageColor('green');

        // Exibir a mensagem de sucesso e redirecionar após 3 segundos
        setTimeout(() => {
          navigation.navigate('formLogin'); // Redireciona para a tela de login
        }, 3000);
      } else {
        setMessage(data.message || 'Ocorreu um erro ao registrar o usuário.');
        setMessageColor('red');
      }
    } catch (error) {
      console.error(error);
      setMessage('Não foi possível conectar ao servidor.');
      setMessageColor('red');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={myImageFlorest} style={styles.image} />
      </View>
      <Text style={styles.title}>Criar conta</Text>
      
      {/* Exibir mensagem de erro ou sucesso */}
      {message ? <Text style={[styles.message, { color: messageColor }]}>{message}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nickName}
        onChangeText={setNickName} // Atualiza o estado do nickName
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true} // Campo de senha
        value={password}
        onChangeText={setPassword} // Atualiza o estado do password
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('formLogin')}>
        <Text style={styles.linkText}>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#5C5C5C',
  },
  input: {
    width: 320,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#059CAD', // Cor de fundo do botão 059CAD
    borderRadius: 50, // Bordas arredondadas
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Cor da sombra no iOS
    width: 320,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
  },
  buttonText: {
    color: '#FFF', // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte
  },
  link: {
    padding: 10,
  },
  linkText: {
    color: '#059CAD',
    fontSize: 20,
    textDecorationLine: 'none',
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain', // Ajuste conforme necessário (contain, cover, stretch)
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default FormCreate;
