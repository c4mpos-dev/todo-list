import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image 
            source={require('../../../assets/images/logoToDo.png')}
          />
        </View>

        <View style={styles.containerTask}>
          <View style={styles.containerNewTask}>
            <View style={styles.containerInput}>
              <TextInput 
                style={styles.inputNewTask}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor="#808080"
              />
              <TouchableOpacity style={styles.buttonNewTask}>
                <Image
                  source={require('../../../assets/images/plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  );
}