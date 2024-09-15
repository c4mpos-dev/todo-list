import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25, 
        marginBottom: 5, 
        height: 64,
        backgroundColor: "#262626",
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: "#333333"
    },
    checkbox: {
        marginLeft: 15,
        borderWidth: 2,
        borderRadius: 999,
    },
    content: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 12,
        paddingBottom: 12,
        color: "#FFF"
    },
    trash: {
        marginRight: 15
    }
})