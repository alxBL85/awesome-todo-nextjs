import { TodoList } from '@/components/TodoList';
import { Container, Typography } from '@mui/material';
import * as React from 'react';

export default function Home() {
  return (
    <Container>
      <Typography variant="h1">Hello!</Typography>
      <Typography variant="body1">
        Welcome to the NerdWallet Coding Interview! This is the root page component. You can find it
        at src/app/page.tsx.
      </Typography>
      <TodoList/>

    </Container>
  );
}
