import { View, Text, Pressable, Button, StyleSheet } from 'react-native';
import type { ReactElement } from 'react';
import type { Task } from '../types/Todo';

interface TodoRowProps {
  item: Task;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export default function Row({ item, toggleTodo, removeTodo }: TodoRowProps): ReactElement {
  return (
    <View style={styles.todoItem}>
      <Pressable style={styles.pressable} onPress={() => toggleTodo(item.id)}>
        <Text style={[styles.todoText, item.completed ? styles.completed : null]}>
          {item.text}
        </Text>
      </Pressable>
      <Button title="Delete" onPress={() => removeTodo(item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 4,
    margin: 4,
    borderColor: '#c1c0c0',
    borderWidth: 8,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center'
  },
  pressable: {
    flex: 1
  },
  todoText: {
    color: 'black'
  },
  completed: {
    textDecorationLine: 'line-through'
  }
});
