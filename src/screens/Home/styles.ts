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
    },
    inputNewTask: {
        width: 251, // 271
        height: 54,
        backgroundColor: "#262626",
        borderRadius: 6,
        borderWidth: 1,
        padding: 14,
        borderColor: "#0D0D0D",
        color: "#FFF"
        
    },
    buttonNewTask: {
        justifyContent: "center",
        alignItems: "center",
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        borderRadius: 6
    },
    containerTask: {
        flex: 1,
        backgroundColor: "#1A1A1A"
    }
})

