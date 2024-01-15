'use client';

import { updateTodo } from '@/services';
import { TodoType } from '@/types';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useState } from 'react';

export default function Todo(todo: TodoType) {
  const [statedTodo, setTodo] = useState<TodoType>(todo);

  const { id, content, completed, createdAt } = statedTodo;

  const color = completed ? 'lightgray' : 'black';
  const creationDate = new Date(createdAt).toISOString();

  async function handleOnClick() {
    const todoToUpdate: TodoType = { ...statedTodo, completed: !statedTodo.completed };
    const newTodo = await updateTodo(todoToUpdate);
    setTodo(newTodo);
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        <Typography variant="h6" color={{ color }}>
          {content}
        </Typography>
        <Typography variant="body2" component="div" color={{ color }}>
          {creationDate}
        </Typography>
        <CardActions>
          <Button size="small" onClick={handleOnClick}>
            {completed ? 'Uncomplete' : 'Complete'}
          </Button>
          <Button size="small">Go to</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
