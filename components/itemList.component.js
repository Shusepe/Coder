import React from "react";
import { StyleSheet, View } from "react-native";
import Item from "./item.component";

export default function ItemList({ items, onDeleteItem, onCheckItem }) {
  return (
    <View style={styles.items}>
      {items.map((i) => (
        <Item data={i} onDelete={onDeleteItem} onCheck={onCheckItem} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  items: {},
});
