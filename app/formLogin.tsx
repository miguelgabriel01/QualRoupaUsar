import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import myImageFlorest from '../assets/images/landscape-nature.png'; // Ajuste o caminho conforme necessário
import { useNavigation } from '@react-navigation/native';

const FormLogin = () => {
  const [nickName, setNickName] = useState(''); // Estado para o campo nickName
  const [password, setPassword] = useState(''); // Estado para o campo password
  const [message, setMessage] = useState(''); // Estado para armazenar mensagens de erro ou sucesso
  const [messageColor, setMessageColor] = useState('black'); // Estado para a cor da mensagem
  const navigation = useNavigation();

  // Função para lidar com o login do usuário
  const handleLogin = async () => {
    // Verifica se os campos foram preenchidos
    if (!nickName || !password) {
      setMessage('Por favor, preencha todos os campos.');
      setMessageColor('red');
      return;
    }

    try {
      // Faz a requisição para a API
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickName, password }), // Envia os dados do usuário
      });

      const data = await response.json(); // Converte a resposta em JSON

      if (response.ok) {
        // Se o login for bem-sucedido
        setMessage('Login bem-sucedido!');
        setMessageColor('green');
        // Salva o token e outros dados no localStorage
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('userId', data.id);
        localStorage.setItem('nickName', data.nickName);

        // Redireciona para a tela de login após 3 segundos
        setTimeout(() => {
          navigation.navigate('formLogin');
        }, 3000);
      } else {
        // Se ocorrer um erro
        setMessage(data.message || 'Ocorreu um erro ao fazer login.');
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
      <Text style={styles.title}>Entrar</Text>
      <Text style={{ color: messageColor }}>{message}</Text> {/* Exibe a mensagem de erro ou sucesso */}
      <Text> </Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Fazer login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('formCreate')}>
        <Text style={styles.linkText}>Fazer cadastro</Text>
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
});

export default FormLogin;
