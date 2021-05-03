import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import logoImg from "../../assets/logo.png";
import api from "../../services/api";

const Register = () => {
  const navigation = useNavigation();
  const [auth, setAuth] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function alert(message) {
    Alert.alert("Atenção", message);
  }

  async function handleRegister() {
    if (!auth.email || !auth.password || !auth.name || !auth.confirmPassword) {
      alert("Todos os campos são obrigatórios!");

      return false;
    }

    if (auth.password !== auth.confirmPassword) {
      alert("As senhas precisam ser iguais para prosseguir");

      return;
    }

    if (auth.password.length < 8) {
      alert("A senha precisa ter no mínimo 8 caracteres");

      return;
    }

    try {
      const response = await api.post("users", {
        name: auth.name,
        email: auth.email,
        password: auth.password,
      });

      const user_id = response.data.id;

      AsyncStorage.setItem("USER", user_id);
      navigation.replace("Tasks");
    } catch (error) {
      if (error.response.status === 401) {
        alert("O email ou senha são inválidos!");
        return false;
      }
      if (error.response.status === 400) {
        alert("Usuário já cadastrado!");
        return false;
      }
      alert("Ocorreu uma falha no login. Tente novamente!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <View style={styles.containerInput}>
        <View style={styles.boxInput}>
          <Feather name="user" size={16} style={styles.iconInput} />
          <TextInput
            name="name"
            type="text"
            placeholder="Nome"
            placeholderTextColor="#BDBDBD"
            color="#313131"
            style={styles.input}
            value={auth.name}
            onChangeText={(text) => setAuth({ ...auth, name: text })}
          />
        </View>

        <View style={styles.boxInput}>
          <Feather name="user-check" size={16} style={styles.iconInput} />
          <TextInput
            name="email"
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={auth.email}
            onChangeText={(text) => setAuth({ ...auth, email: text })}
          />
        </View>

        <View style={styles.boxInput}>
          <Feather name="key" size={16} style={styles.iconInput} />
          <TextInput
            name="password"
            secureTextEntry={true}
            placeholder="Senha"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={auth.password}
            onChangeText={(text) => setAuth({ ...auth, password: text })}
          />
        </View>

        <View style={styles.boxInput}>
          <Feather name="key" size={16} style={styles.iconInput} />
          <TextInput
            name="confirmPassword"
            secureTextEntry={true}
            placeholder="Confirme sua senha"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={auth.confirmPassword}
            onChangeText={(text) => setAuth({ ...auth, confirmPassword: text })}
          />
        </View>

        <TouchableOpacity style={styles.enterButton} onPress={handleRegister}>
          <Text style={styles.enterButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Logon")}
        >
          <Feather name="log-in" size={16} color="#0277BD" />
          <Text style={styles.registerButtonText}>Já tenho cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
