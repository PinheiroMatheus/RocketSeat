import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageHeader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        backgroundColor: '#0D0D0D'
    },
    body: {
        flex: 7,
        backgroundColor: '#1A1A1A',
        padding: 20
    },
    headerInput: {
        flexDirection: 'row',
        width: '100%',
        gap: 4,
        marginTop: -45,
    },
    textInput: {
        backgroundColor: '#262626',
        padding: 16,
        flex: 1,
        borderRadius: 6,
        color: '#F2F2F2'
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
        paddingBottom: 20,
    },
    relatoryCreated: {
        flexDirection: "row",
        gap: 5,
    },
    relatoryCreatedText: {
        color: '#4EA8DE',
        fontWeight: "bold",
    },
    relatoryCreatedTextCounter: {
        color: '#D9D9D9',
    },
    relatoryConcludes: {
        flexDirection: "row",
        gap: 5,
    },
    relatoryConcludesText: {
        color: '#4EA8DE',
        fontWeight: "bold"
    },
    relatoryConcludesTextCounter: {
        color: '#D9D9D9',
    },
    listEmpty: {
        alignItems: "center",
        paddingVertical: 30,
    },
    listEmptyImage: {
        paddingBottom: 16,
    },
    listEmptyTextTitle: {
        color: '#808080',
        fontWeight: "bold",
        fontSize: 14,
    },
    listEmptyTextSubTitle: {
        color: '#808080'
    },
})