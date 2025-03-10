import { Pressable, StyleSheet, Text, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { TaskType } from "../types/Task";

export const Task = ({ task, handleDelete }: {task: TaskType, handleDelete: (id: number) => void}) => {
    return (
        <View style={s.container} >
            <Pressable onPress={() => handleDelete(task.id)}><FontAwesome name="trash" size={30} /></Pressable>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{task.label}</Text>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        padding: 10,
        gap: 20,
        borderRadius: 10,
        marginBottom: 10
    }
})