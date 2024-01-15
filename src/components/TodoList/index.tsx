import { TodoType } from '@/types';
import { List, ListItem } from '@mui/material';
import { Suspense } from 'react';
import Todo from '../Todo';

export async function TodoList({ todos }: { todos: TodoType[] }) {
  return (
    <Suspense fallback={'loading...'}>
      <List>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            <Todo
              id={todo.id}
              completed={todo.completed}
              content={todo.content}
              createdAt={todo.createdAt}
            />
          </ListItem>
        ))}
      </List>
    </Suspense>
  );
}
