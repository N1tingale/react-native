import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Тарас Шевченко", id: 1 },
    { name: "Лариса Косач", id: 2 },
    { name: "Іван Франко", id: 3 },
    { name: "Володимир Тютюнник", id: 4 },
    { name: "Павло Тичина", id: 5 }
  ]);
  return (
    <View style={styles.container}>
      <FlatList
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
        <Text style={styles.item}>Name: {item.name}, id: {item.id}</Text>
      )}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontWeight: "600",
    fontStyle: "italic",
    backgroundColor: "yellow",
    padding: 4
  },
  container:{
    marginTop: 150
  }
});
