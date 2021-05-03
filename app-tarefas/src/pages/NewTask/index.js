import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AsyncStorage } from "react-native";
import moment from "moment";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import api from "../../services/api";

export default function Detail() {
  const [datePickerVisible, setDatePickerVisibility] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    place: "",
    hour: "",
    date: "",
  });

  const [userId, setUserId] = useState("");
  const navigation = useNavigation();

  async function USER() {
    try {
      const userId = await AsyncStorage.getItem("USER");
      setUserId(userId);
      alert(userId);
    } catch (error) {}
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setTask({
      ...task,
      date: moment(date).format("DD/MM"),
      hour: moment(date).format("HH:mm"),
    });
    hideDatePicker();
  };

  function alert(message) {
    alert("Atenção", message);
  }

  function navigateBack() {
    navigation.goBack();
  }

  async function handleNewTask() {
    try {
      USER();

      const response = await api.post(
        "task",
        {
          title: task.title,
          description: task.description,
          place: task.place,
          hour: task.hour,
          date: task.date,
        },
        {
          headers: {
            Authorization: userId,
          },
        }
      );
      navigation.navigate("Tasks", { task });
    } catch (error) {
      alert("Ocorreu um erro inesperado. Tente novamente!");
    }
  }

  useEffect(() => {
    USER();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#0277BD" />
          </TouchableOpacity>
        </View>

        <View style={styles.task}>
          <TextInput
            name="title"
            style={[styles.taskTitle, { marginTop: 0 }]}
            placeholder="Título"
            type="text"
            value={task.title}
            onChangeText={(text) => setTask({ ...task, title: text })}
          />

          <TextInput
            name="description"
            style={styles.taskDescription}
            value={task.description}
            placeholder="Tarefa"
            type="text"
            onChangeText={(text) => setTask({ ...task, description: text })}
          />

          <TextInput
            name="place"
            style={styles.taskPlace}
            value={task.place}
            placeholder="Local"
            type="text"
            onChangeText={(text) => setTask({ ...task, place: text })}
          />

          <TouchableOpacity style={styles.boxDate} onPress={showDatePicker}>
            <Feather name="calendar" size={16} color="#0277BD" />
            <View>
              <Text style={styles.taskDate}>{task.date}</Text>
              <Text style={styles.taskHour}>{task.hour}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <View style={styles.boxButtonSave}>
        <TouchableOpacity style={styles.saveButton} onPress={handleNewTask}>
          <Feather name="check" size={16} color="#0277BD" />
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
