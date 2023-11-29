import { Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";

import { styles } from "./styles"

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = {
    item: string
    checked: boolean
    onRemove: () => void
}

export function ContainerList({ item, checked, onRemove }: Props) {
    const [checkBox, setCheckBox] = useState(checked)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCheckBox(!checkBox)} style={styles.containerCheckBox}>
                {checkBox ? <Icons name='checkbox-blank-circle-outline' size={24} color='#4EA8DE' /> : <Icons name='checkbox-marked-circle' size={24} color='#5E60CE' />}
            </TouchableOpacity>
            <Text style={checkBox ? styles.containerText : styles.containerTextFalse}>{item}</Text>
            <TouchableOpacity style={styles.containerTrash} onPress={onRemove}>
                <Icons name='trash-can-outline' size={24} color='#808080' />
            </TouchableOpacity>
        </View>
    )
}