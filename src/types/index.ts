import { z } from 'zod';
export interface TodoType {
  id: string;
  content: string;
  completed: boolean;
  createdAt: number;
}

export const TodoSchema = z.object({
  id: z.string(),
  content: z.string(),
  completed: z.boolean(),
  createdAt: z.number(),
});
