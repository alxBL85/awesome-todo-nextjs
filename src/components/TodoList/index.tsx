import { getTodos } from '@/services';
import Todo from '../Todo';
import { List, ListItem } from '@mui/material';
import { Suspense } from 'react';

export async function TodoList() {
  const todos = await getTodos();

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
