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

const Logon = () => {
  const navigation = useNavigation();
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  function alert(message) {
    Alert.alert("Atenção", message);
  }

  async function handleLogon() {
    if (!auth.email || !auth.password) {
      alert("Todos os campos são obrigatórios!");

      return false;
    }

    try {
      const response = await api.post("session", {
        email: auth.email,
        password: auth.password,
      });

      const user_id = response.data.id;
      const activity = "Logon";

      AsyncStorage.setItem("USER", user_id);
      navigation.replace("Tasks", { activity });
    } catch (error) {
      if (error.response.status === 401) {
        alert("O email ou senha são inválidos!");
        return false;
      }
      alert("Ocorreu uma falha no login. Tente novamente!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image size={16} alt="Logo" source={logoImg} />
      </View>

      <View style={styles.containerInput}>
        <View style={styles.boxInput}>
          <Feather name="user" size={16} style={styles.iconInput} />
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

        <TouchableOpacity style={styles.enterButton} onPress={handleLogon}>
          <Text style={styles.enterButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Quero me cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logon;
