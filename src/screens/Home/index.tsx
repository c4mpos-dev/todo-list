import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Task from '../../components/Task/index'
import LogoToDo from '../../../assets/images/logoToDo.svg'
import Plus from '../../../assets/images/plus.svg'
import Clipboard from '../../../assets/images/clipboard.svg'

export default function App() {
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
              <TouchableOpacity style={styles.buttonNewTask}>
                <Plus/>
              </TouchableOpacity>
            </View>
          </View>
            
          <View style={styles.containerTasksInfos}>
            <View style={styles.containerTasksCriadas}>
              <Text style={styles.textCriadas}>Criadas</Text>
              <Text style={styles.counter}>0</Text>
            </View>
            
            <View style={styles.containerTasksConcluidas}>
              <Text style={styles.textConcluidas}>Concluídas</Text>
              <Text style={styles.counter}>0</Text>
            </View>
          </View>

          <View>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
          </View>

          {/* List Empty */}
          {/* <View style={styles.containerListEmpty}>
            <Clipboard/>
            <Text style={styles.textOneListEmpty}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.textTwoListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
          </View> */}

        </View>
    </View>
  );
}