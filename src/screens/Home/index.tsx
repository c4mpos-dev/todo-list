import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Task from '../../components/Task/index'
import LogoToDo from '../../../assets/images/logoToDo.svg'
import Plus from '../../../assets/images/plus.svg'
import Clipboard from '../../../assets/images/clipboard.svg'

export default function Home() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd(){
    if (task.includes(taskName)) {
      return Alert.alert("Tarefa existente", "Essa tarefa já está cadastrada na lista.")
    }
    else if (taskName == ''){
      return Alert.alert("Tarefa vazia", "Digite um conteúdo para a tarefa, não é possível adicionar uma tarefa vazia.")
    }
    
    setTask(prevState => [...prevState, taskName])
    setTaskName('');
  }

  function handleTaskRemove(text: string){
    Alert.alert("Remover Tarefa", `Realmente deseja essa tarefa?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => {
        setTask(prevState => prevState.filter(task => task != text));
        setCompletedTasks(prevState => prevState.filter(completedTask => completedTask != text));
        }
      }
    ]);
  }

  function taskComplete(text: string) {
    if (completedTasks.includes(text)) {
      setCompletedTasks(prevCompleted => prevCompleted.filter(task => task !== text));  // Desmarca como concluída
    } else {
      setCompletedTasks(prevCompleted => [...prevCompleted, text]);  // Marca como concluída
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.containerTop}>
          <LogoToDo/>
        </View>

        <View style={styles.containerTasks}>
          <View style={styles.containerNewTask}>
            <View style={styles.containerInput}>
              <TextInput 
                style={styles.inputNewTask}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor="#808080"
                onChangeText={setTaskName}
                value={taskName}
                onFocus={(border) => {
                  border.target.setNativeProps({
                    style: { borderColor: '#5E60CE' }
                  });
                }}
                onBlur={(e) => {
                  e.target.setNativeProps({
                    style: { borderColor: '#0D0D0D' }
                  });
                }}
              />
              <TouchableOpacity style={styles.buttonNewTask} onPress={handleTaskAdd}>
                <Plus/>
              </TouchableOpacity>
            </View>
          </View>
            
          <View style={styles.containerTasksInfos}>
            <View style={styles.containerTasksCriadas}>
              <Text style={styles.textCriadas}>Criadas</Text>
              <View style={styles.containerCounter}>
                <Text style={styles.counter}>{task.length}</Text>
              </View>
            </View>
            
            <View style={styles.containerTasksConcluidas}>
              <Text style={styles.textConcluidas}>Concluídas</Text>
              <View style={styles.containerCounter}>
                <Text style={styles.counter}>{completedTasks.length}</Text>
              </View>
            </View>
          </View>

          <FlatList 
            data={task}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                text={item}  
                onRemove={() => handleTaskRemove(item)}
                onComplete={() => taskComplete(item)}
                isChecked={completedTasks.includes(item)}
              />
            )}   
            showsVerticalScrollIndicator={false}    
            ListEmptyComponent={() => (
              <View style={styles.containerListEmpty}>
                <Clipboard/>
                <Text style={styles.textOneListEmpty}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.textTwoListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}                               
          /> 

        </View>
    </View>
  );
}