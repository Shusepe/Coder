import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "react-native-paper";

export default function ModalItem({
  modalVisible,
  setModalVisible,
  item,
  onDelete,
}) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>
            Esta seguro que desea borrar "{item.name}"?
          </Text>
          <View>
            <Button mode="contained" onPress={() => onDelete(item.id)}>
              Confirmar
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {},
  modalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  modalMessage: {},
  modalTitle: {},
});
