import React from "react";
import {View } from "react-native";
import styles from "./styles/appStyle";
import Header from "./Views/Header";
import ListItem from "./Views/ListItem";
import SendMessageButton from "./Views/SendMessageButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ListItem />
      <SendMessageButton />
    </View>
  );
}
