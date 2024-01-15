'use client';
import handleClick from '@/actions/todoForm';
import { Container, TextField, Button } from '@mui/material';
import { useFormStatus } from 'react-dom';

export default function TodoForm() {
  const { pending } = useFormStatus();
  return (
    <Container component="main">
      <form action={handleClick}>
        <TextField variant="outlined" id="newTodo" name="newTodo" label="Text a new todo" />
        <Button
          size="large"
          variant="contained"
          color={pending ? 'success' : 'primary'}
          type="submit"
        >
          Add Todo
        </Button>
      </form>
    </Container>
  );
}
