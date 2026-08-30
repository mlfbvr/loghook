import { z } from 'zod';

export const CatchSchema = z.object({
  id: z.uuid().optional(),
  species: z.string().min(1, { message: 'Species is required' }),
  length: z.number().positive(),
  weight: z.number().positive(),
  caughtBy: z.string().optional(),
  location: z.string(),
  released: z.boolean(),
  dateCaught: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
});

export type Catch = z.infer<typeof CatchSchema>;
