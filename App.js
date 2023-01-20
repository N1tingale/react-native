import { useState } from "react";
import Toast from "react-native-toast-message";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const showToastError = () => {
    Toast.show({
      type: "error",
      text1: "❌ Failed to create todo.",
      text2: "Todo text is too short.",
    });
  };

  const showToastSuccess = () => {
    Toast.show({
      type: "success",
      text1: "✅ Success!",
      text2: "Todo created.",
    });
  };

  const [todos, setTodos] = useState([{ text: "do stuff", key: 1 }]);

  const [text, setText] = useState("");

  const submitHandler = (value) => {
    if (value.length < 5) {
      showToastError();
      return;
    } else {
      showToastSuccess();
      setTodos((prevTodos) => {
        return [{ text, key: Math.random().toString() }, ...prevTodos];
      });
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a todo!</Text>
      <TextInput
        maxLength={100}
        style={styles.input}
        placeholder={"Type in something..."}
        value={text}
        onChangeText={(val) => setText(val)}
        onSubmitEditing={(value) => submitHandler(value.nativeEvent.text)}
      />
      <View style={styles.todoList}>
        {todos.length > 0 ? (
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Text style={styles.todo}>· {item.text}</Text>
            )}
          />
        ) : (
          <Text style={styles.noTodos}>No todos yet!</Text>
        )}
      </View>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
  input: {
    borderColor: "#57595D",
    borderWidth: 1,
    margin: 10,
    width: "75%",
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
  },
  noTodos: {
    marginTop: 15,
    fontSize: 20,
  },
  todoList:{
    width:"80%"
  },
  todo: {
    borderWidth:1,
    borderColor:"#92a8d1",
    backgroundColor: "#f5f5f5",
    color: "white",
    borderRadius: 5,
    fontSize: 22,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 15
  },
  icon:{
    color:"#a9a9a9"
  }
});
