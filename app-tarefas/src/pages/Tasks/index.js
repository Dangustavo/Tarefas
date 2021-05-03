import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import logoImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const route = useRoute();

  const [userId, setUserId] = useState("");
  const navigation = useNavigation();

  async function USER() {
    const userId = await AsyncStorage.getItem("USER");
    setUserId(userId);
  }

  function alertDelete(task, id) {
    Alert.alert(
      "Atenção",
      `Deseja realmente excluir a tarefa ${task}`,
      [
        {
          text: "Sim",
          onPress: () => {
            handleDelete(id);
          },
          style: "cancel",
        },
        { text: "Não" },
      ],
      { cancelable: false }
    );
  }

  function alertLogout() {
    Alert.alert(
      "Logout",
      `Tem certeza que deseja sair?`,
      [
        {
          text: "Sim",
          onPress: () => {
            logout();
          },
          style: "cancel",
        },
        { text: "Não" },
      ],
      { cancelable: false }
    );
  }

  function navigateToDetail(task) {
    navigation.navigate("Detail", { task });
  }

  function navigateNewtask() {
    navigation.navigate("NewTask");
  }

  async function logout() {
    await AsyncStorage.setItem("USER", "");
    navigation.replace("Logon");
  }

  async function loadTasks() {
    USER();
    const userId = await AsyncStorage.getItem("USER");
    setUserId(userId);
    const response = await api.get("profile", {
      headers: {
        Authorization: userId,
      },
    });

    setTasks(response.data);
  }

  useEffect(() => {
    loadTasks();
  }, [route]);

  async function handleDelete(id) {
    try {
      await api.delete(`task/${id}`, {
        headers: {
          Authorization: userId,
        },
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      alert("Ocorreu um erro inesperado. Tente novamente!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity style={styles.logoutButton} onPress={alertLogout}>
          <Feather name="log-in" size={18} color="#0277BD" />
        </TouchableOpacity>
      </View>

      <Text style={styles.description}>Minhas tarefas no momento.</Text>

      <FlatList
        style={styles.tasksList}
        data={tasks}
        keyExtractor={(task) => String(task.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: task }) => (
          <View style={styles.task}>
            <View style={styles.boxDelete}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => alertDelete(task.title, task.id)}
              >
                <Feather name="trash-2" size={16} color="#616161" />
              </TouchableOpacity>
            </View>

            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>

            <View style={styles.boxDate}>
              <Feather name="calendar" size={16} color="#0277BD" />
              <Text style={styles.taskDate}>{task.date}</Text>
            </View>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(task)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#0277BD" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.boxButtonNewTask}>
        <TouchableOpacity
          style={styles.buttonNewTask}
          onPress={navigateNewtask}
        >
          <Feather name="plus" size={30} color="#0277BD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
