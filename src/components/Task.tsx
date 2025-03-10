import { Pressable, StyleSheet, Text, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

export const Task = () => {
    return (
        <View style={s.container} >
            <Pressable><FontAwesome name="trash" size={30} /></Pressable>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy food</Text>
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
        borderRadius: 10
    }
})