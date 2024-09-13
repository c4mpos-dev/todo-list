import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.containerNewTasks}>
            <Text style={styles.newTasksText}>New tasks!</Text>
        </View>
        <View style={styles.containerTasks}>
            <Text>Tarefas!</Text>
        </View>
    </View>
  );
}