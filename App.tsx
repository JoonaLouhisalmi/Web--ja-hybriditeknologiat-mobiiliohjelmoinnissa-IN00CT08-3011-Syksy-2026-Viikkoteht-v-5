import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';
import type { ReactElement } from 'react';
import type { Task } from './types/Todo';
import Row from './components/Row';
import { useTodos } from './hooks/useTodos';

export default function App(): ReactElement {
  const { tasks, input, setInput, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Add task"
        />
        <Button title="Add" onPress={addTodo} />
      </View>

      <FlatList<Task>
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Row
            item={item}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'black'
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    color: 'black'
  }
});
