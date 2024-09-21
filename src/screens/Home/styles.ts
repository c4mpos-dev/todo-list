import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerTop: {
        justifyContent: "center",
        alignItems: "center",
        height: 173,
        backgroundColor: "#0D0D0D"
    },
    containerNewTask: {
        position: "absolute",
        width: "100%",
        top: -27,
    },
    containerInput: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 4,
        marginLeft: 25,
        marginRight: 25
    },
    inputNewTask: {
        flex: 1,
        height: 54,
        borderRadius: 6,
        borderWidth: 1,
        padding: 14,
        backgroundColor: "#262626",
        borderColor: "#0D0D0D",
        color: "#FFF",
        fontSize: 16,
        elevation: 1
    },
    buttonNewTask: {
        justifyContent: "center",
        alignItems: "center",
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        borderRadius: 6
    },
    containerTasksInfos: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 55,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 20
    },
    containerTasksCriadas: {
        alignItems: "center",
        flexDirection: "row",
        gap: 8
    },
    containerTasksConcluidas: {
        alignItems: "center",
        flexDirection: "row",
        gap: 8
    },
    textCriadas: {
        fontSize: 14,
        color: "#4EA8DE",
        fontWeight: "bold"
    },
    textConcluidas: {
        fontSize: 14,
        color: "#8284FA",
        fontWeight: "bold"
    },
    containerCounter: {
        borderRadius: 999,
        backgroundColor: "#333333"
    },
    counter: {
        color: "#FFF",
        fontWeight: "bold",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    containerListEmpty: {
        alignItems: "center",
        paddingTop: 45,
        borderTopWidth: 2,
        borderTopColor: "#333333",
        marginLeft: 25,
        marginRight: 25
    },
    textOneListEmpty: {
        marginTop: 16,
        color: "#808080",
        fontWeight: "bold"
    },
    textTwoListEmpty: {
        color: "#808080",
    },
    containerTasks: {
        flex: 1,
        paddingBottom: 24,
        backgroundColor: "#1A1A1A"
    }
})