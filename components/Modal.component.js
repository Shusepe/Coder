import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Modal } from "react-native";

export default function ModalItem({ modalVisible }) {
  return (
    <Modal animationType="slide" visible={false} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>
            Esta seguro que desea borrar este elemento?
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {},
  modalContainer: {},
  modalMessage: {},
  modalTitle: {},
});
