'use server';

import { createTodo } from '@/services';
import { TodoType } from '@/types';
import { redirect } from 'next/navigation';

export default async function handleClick(formData: any) {
  const content = formData.get('newTodo');
  const result: TodoType = await createTodo(content);
  redirect('/');
}
