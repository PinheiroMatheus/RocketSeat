import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.imageHeader}>
                <Image
                    source={require('../../../assets/LogoTodoList.png')} 
                />
            </View>
            <View>
                <View style={styles.headerInput}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                    />
                    <TouchableOpacity style={styles.buttonAdd}>
                        <Text style={styles.buttonAddText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.relatory}>
                    <Text style={styles.relatoryCreates}>Criadas</Text>
                    <Text style={styles.relatoryConcludes}>Concluídas</Text>
                </View>
            </View>
        </View>
    )
}