import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/appStyle";

const ListItem = () => {
  return (
    <View style={styles.contBottom}>
      <View style={styles.contBottomData1}>
        <Image
          style={styles.dataimage}
          source={require("../assets/dev1.png")}
        />
        <View style={styles.dataText}>
          <Text style={styles.dataTextName}>Gaün B.P.</Text>
          <Text style={styles.dataTextMessage}>ders başladı arkadaşlar </Text>
        </View>
      </View>

      <View style={styles.contBottomData2}>
        <Image
          style={styles.dataimage}
          source={require("../assets/yellow.png")}
        />
        <View style={styles.dataText}>
          <Text style={styles.dataTextName}>İsimsiz Kullanıcı </Text>
          <Text style={styles.dataTextMessage}>evet </Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
