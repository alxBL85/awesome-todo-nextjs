import TodoForm from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
import { getTodos } from '@/services';
import { Container, Typography } from '@mui/material';
import { Suspense } from 'react';

export default async function Home() {
  let todos = await getTodos();

  return (
    <Container>
      <Typography variant="h2">The Awesome NextJs Todo List!</Typography>
      <Typography variant="body1">
        Welcome to the NerdWallet Coding Interview! This is the root page component. You can find it
        at src/app/page.tsx.
      </Typography>

      <TodoForm />
      <Suspense fallback={<h5>Loading...</h5>}>
        <TodoList todos={todos} />
      </Suspense>
    </Container>
  );
}
