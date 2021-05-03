import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import { View } from "react-native";
import styles from "./styles";

export default function SplashScreen() {
  const navigation = useNavigation();

  async function USER() {
    try {
      if (
        (await AsyncStorage.getItem("USER")) !== null &&
        (await AsyncStorage.getItem("USER")) !== ""
      ) {
        navigation.replace("Tasks");
        return;
      }

      navigation.replace("Logon");
    } catch (error) {}
  }

  useEffect(() => {
    USER();
  }, []);

  return <View style={styles.container} />;
}
