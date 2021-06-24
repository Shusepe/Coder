import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import ItemList from "./components/itemList.component";

export default function App() {
  const [items, setItems] = useState([]);
  const [temp, setTemp] = useState("");

  function onInputChange(e) {
    const text = e.target.value;
    setTemp(text);
  }

  function onAddItem() {
    const id = items.length + 1;

    const item = {
      id,
      name: temp,
      ischecked: false,
    };

    setItems([...items, item]);
    setTemp("");
  }

  function onDeleteItem(itemId) {
    const updatedItems = items.filter((item) => item.id != itemId);
    setItems(updatedItems);
  }

  function onCheckItem(itemId) {
    const item = items.find((item) => item.id == itemId);
    item.ischecked = true;
    const filteredItems = items.filter((item) => item.id != itemId);
    setItems([...filteredItems, item]);
  }

  const [text, setText] = React.useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Añadir"
          style={styles.input}
          value={temp}
          onChange={(event) => onInputChange(event)}
        />

        {/* <TextInput
          placeholder="Añadir"
          style={styles.input}
          onChange={(event) => onInputChange(event)}
          value={temp}
        />*/}
        <Button title="+" color="#AAAAAA" onPress={() => onAddItem()} />

        <Button mode="contained" onPress={() => onAddItem()}>
          +
        </Button>
      </View>

      <ItemList
        items={items}
        onDeleteItem={onDeleteItem}
        onCheckItem={onCheckItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: "#E1E8EB",
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
  },
});
