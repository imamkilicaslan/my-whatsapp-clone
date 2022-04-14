import React from "react";
import {TouchableOpacity } from "react-native";
import styles from "../styles/appStyle";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const SendMessageButton = () => {
  return (
    <TouchableOpacity style={styles.touchable}>
      <MaterialCommunityIcons
        style={styles.contSendM}
        name="message-text-outline"
        size={28}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default SendMessageButton;
