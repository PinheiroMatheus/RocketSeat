import { FlatList, Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"

import { ContainerList } from "../../components/ContainerList"

import { styles } from "./styles"
import { useState } from "react"

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export function Home() {
    const [toDoList, setToDoList] = useState<string[]>([])
    const [toDoListComponent, setToDoListComponent] = useState('')
    // const [toDoListComplete, toDoListComplete] = useState<string[]>([])

    function handleToDoListAdd() {
        if (toDoList.includes(toDoListComponent)) {
            return Alert.alert('Atividade existente', 'Já existe uma atividade na lista com esse nome!')
        }

        setToDoList(prevState => [...prevState, toDoListComponent])
        setToDoListComponent('')
    }

    function handleToDoListRemove(name: string) {
        Alert.alert('Deletar atividade?', `Deseja deletar a atividade - ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setToDoList(prevState => prevState.filter(item => item !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageHeader}>
                <Image
                    source={require('../../../assets/LogoTodoList.png')}
                />
            </View>

            <View style={styles.body}>
                <View style={styles.headerInput}>
                    <TextInput
                        style={styles.textInput}
                        value={toDoListComponent}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        onChangeText={setToDoListComponent}
                    />
                    <TouchableOpacity style={styles.buttonAdd} onPress={handleToDoListAdd}>
                        <Text style={styles.buttonAddText}>
                            <Icons name='plus-circle-outline' size={24} color='#F2F2F2' />
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.relatory}>
                    <View style={styles.relatoryCreated}>
                        <Text style={styles.relatoryCreatedText}>Criadas</Text>
                        <Text style={styles.relatoryCreatedTextCounter}>{toDoList.length}</Text>
                    </View>
                    <View style={styles.relatoryConcludes}>
                        <Text style={styles.relatoryConcludesText}>Concluídas</Text>
                        <Text style={styles.relatoryConcludesTextCounter}>0</Text>
                    </View>
                </View>

                <FlatList
                    data={toDoList}
                    renderItem={({ item }) => <ContainerList
                        item={item}
                        checked={true}
                        onRemove={() => handleToDoListRemove(item)} />}
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <View style={styles.listEmptyImage}>
                                <Image
                                    source={require('../../../assets/Clipboard.png')}
                                />
                            </View>
                            <Text style={styles.listEmptyTextTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyTextSubTitle}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}