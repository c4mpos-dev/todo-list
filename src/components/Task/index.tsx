import React, { useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles"
import Trash from "../../../assets/images/trash.svg"
import Checkbox from 'expo-checkbox';

type Props = {
    text: string;
    isChecked: boolean;
    onRemove: () => void;
    onComplete: () => void
}

export default function Task({ text, onRemove, isChecked, onComplete}: Props){
    return (
        <View style={styles.container}>
            <Checkbox
                value={isChecked}
                onValueChange={onComplete}
                style={styles.checkbox}
                color={isChecked ? '#5E60CE' : '#4EA8DE'}
            />
            <Text style={[styles.content, { textDecorationLine: isChecked ? 'line-through' : 'none' }]}>
                {text}
            </Text>
            <Trash style={styles.trash} onPress={onRemove}/>
            
        </View>
    )
}