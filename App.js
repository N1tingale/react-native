import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {

  const[todos, setTodos] = useState([]);

  const[text, setText] = useState("")

  const handleSubmit = (value) => {
    if (value.length < 5){
      
    }
    setTodos([...todos, value])
    console.log(todos)
    setText("")
  }



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a todo!</Text>
      <TextInput maxLength={100} style={styles.input} placeholder={"Type in something..."} value={text} onChangeText={(val) => setText(val)} onSubmitEditing={(value) => handleSubmit(value.nativeEvent.text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text:{
    color: "white",
    fontSize: 25
  },
  input:{
    borderColor: "#57595D",
    borderWidth: 1,
    margin: 10,
    width: "75%",
    height: 40,
    borderRadius: 5,
    paddingLeft: 10
  }

});
