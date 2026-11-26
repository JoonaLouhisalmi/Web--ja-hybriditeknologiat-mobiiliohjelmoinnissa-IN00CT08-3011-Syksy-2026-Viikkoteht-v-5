import { useReducer, useState } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';
import type { Task } from '../types/Todo';

export type UseTodosResult = {
  tasks: Task[];
  input: string;
  setInput: (text: string) => void;
  addTodo: () => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export function useTodos(): UseTodosResult {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState<string>('');

  const addTodo = (): void => {
    if (input.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: input.trim(),
        completed: false
      };

      dispatch({ type: 'add', task });
      setInput('');
    }
  };

  return {
    tasks,
    input,
    setInput,
    addTodo,
    removeTodo: (id: string): void => dispatch({ type: 'remove', id }),
    toggleTodo: (id: string): void => dispatch({ type: 'toggle', id })
  };
}
