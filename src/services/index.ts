'use server';

import { TodoType } from '@/types';

const headers = {
  Accept: '*/*',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
  'Content-Type': 'application/json',
};

export async function getTodos(): Promise<TodoType[]> {
  const response = await fetch('https://63ca19f3d0ab64be2b4c5a64.mockapi.io/api/v1/todo', {
    cache: 'no-store',
  });
  const todos = await response.json();
  return todos;
}

export async function updateTodo(todo: TodoType): Promise<TodoType> {
  const response = await fetch(
    `https://63ca19f3d0ab64be2b4c5a64.mockapi.io/api/v1/todo/${todo.id}`,
    { method: 'PUT', body: JSON.stringify(todo), headers },
  );
  const updatedTodo = await response.json();
  return updatedTodo;
}
