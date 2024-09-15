import React, { useState } from 'react';
import { View, Text } from "react-native";
import { styles } from "./styles"
import Trash from "../../../assets/images/trash.svg"
import Checkbox from 'expo-checkbox';

export default function Task(){
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Checkbox
                value={isChecked}
                onValueChange={setIsChecked}
                style={styles.checkbox}
                color={isChecked ? '#5E60CE' : '#4EA8DE'}
            />
            <Text style={styles.content}>
                Integer urna interdum massa libero auctor neque turpis turpis.
            </Text>
            <Trash style={styles.trash}/>
            
        </View>
    )
}