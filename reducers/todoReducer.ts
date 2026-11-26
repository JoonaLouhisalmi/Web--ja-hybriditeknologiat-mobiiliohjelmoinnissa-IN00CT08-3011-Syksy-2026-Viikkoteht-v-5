import type { Task } from '../types/Todo';

export type TodoAction =
  | { type: 'add'; task: Task }
  | { type: 'remove'; id: string }
  | { type: 'toggle'; id: string };

export const initialState: Task[] = [];

export function todoReducer(state: Task[], action: TodoAction): Task[] {
  switch (action.type) {
    case 'add':
      return [...state, action.task];
    case 'remove':
      return state.filter(item => item.id !== action.id);
    case 'toggle':
      return state.map(item => item.id === action.id
          ? { ...item, completed: !item.completed }
          : item
      );
  }
}
