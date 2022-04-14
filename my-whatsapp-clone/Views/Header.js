import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/appStyle";

import { AntDesign, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <>
      <View style={styles.contTop}>
        <View style={styles.contTopLeft}>WhatsApp</View>
        <View style={styles.contTopRight}>
          <AntDesign
            style={{ marginRight: 10 }}
            name="search1"
            size={20}
            color="white"
          />
          <Ionicons name="ellipsis-vertical" size={20} color="white" />
        </View>
      </View>
      <View style={styles.contMiddle}>
        <Ionicons
          style={{ opacity: 0.7 }}
          name="ios-camera"
          size={20}
          color="white"
        />
        <View style={styles.contMiddleRight}>
          <Text style={styles.sohbetler}> SOHBETLER </Text>
          <Text style={styles.durum}>DURUM </Text>
          <Text style={styles.aramalar}>ARAMALAR</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
