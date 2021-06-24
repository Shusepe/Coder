import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import ModalItem from "./modalItem.component";

export default function Item({ data, onDelete, onCheck }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View key={data.id} style={styles.item}>
      <Text style={styles.name}> {data.name} </Text>
      {data.ischecked === false && (
        <View style={styles.inputContainer}>
          <Button
            title="               X               "
            color="#FFC107"
            onPress={() => setModalVisible(true)}
          />
          <Button
            title="               ✓               "
            color="#7952B3"
            onPress={() => onCheck(data.id)}
          />
        </View>
      )}
      <ModalItem
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={data}
        onDelete={onDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    color: "#343A40",
  },

  item: {},

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
