import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 24,
        backgroundColor: 
    },
    imageHeader: {
        alignItems: "center",
        padding: 40,
    },
    headerInput: {
        flexDirection: 'row',
        width: '100%',
        gap: 4,
    },
    textInput: {
        backgroundColor: '#262626',
        padding: 16,
        flex: 1,
        borderRadius: 6,
    },
    buttonAdd: {
        backgroundColor: '#1E6F9F',
        padding: 18,
        borderRadius: 6,
    },
    buttonAddText: {
        color: '#F2F2F2',
    },
    relatory: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 30,
    },
    relatoryCreates: {
        color: '#4EA8DE',
        fontWeight: "bold"
    },
    relatoryConcludes: {
        color: '#8284FA',
        fontWeight: "bold"
    }
})