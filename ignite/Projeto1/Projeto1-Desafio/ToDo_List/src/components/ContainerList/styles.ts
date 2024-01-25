import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: '#262626',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10
    },
    containerCheckBox: {
        fontSize: 24,
        color: '#4EA8DE',
        flex: 1,
    },
    containerText: {
        color: '#F2F2F2',
        flex: 8,
    },
    containerTextFalse: {
        color: '#808080',
        textDecorationLine: "line-through",
        flex: 8,
    },
    containerTrash: {
        flex: 1,
        alignItems: "flex-end"
    }
})