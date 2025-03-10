import { StyleSheet, StatusBar, View, Text, TextInput, Pressable, FlatList } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Task } from "./components/Task";
import { useEffect, useState } from "react";
import { TaskType } from "./types/Task";

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([]);
  
  useEffect(() => {
    setTasks([
      {id: 1, label: "buy ball"},
      {id: 2, label: "walk cat"},
    ])
  },[])
  
  const handleAdd = () => {
    alert(text);
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Tasks</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TextInput
            style={s.input}
            placeholder="Enter your new task..."
            value={text}
            onChangeText={e => setText(e)}
          />
          <Pressable style={s.button} onPress={handleAdd}>
            <FontAwesome name="plus" color="white" size={20}/>
          </Pressable>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Task task={tasks}/>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
    flex: 1
  },
  header: {
    backgroundColor: "#22272e",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 7,
    fontSize: 20,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: "aqua",
    borderRadius: 7,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
